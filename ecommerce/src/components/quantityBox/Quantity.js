import React, { useState } from "react";
import "./quantity.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Quantity = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handlePlus = () => {
    if (inputValue < 10) {
      const newValue = inputValue + 1;
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  const handleMinus = () => {
    if (inputValue > 1) {
      const newValue = inputValue - 1;
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="counterSection">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          const newValue = Math.max(1, Math.min(10, Number(e.target.value)));
          setInputValue(newValue);
          onChange(newValue);
        }}
      />
      <span className="arrow plus" onClick={handlePlus}>
        <KeyboardArrowUpIcon />
      </span>
      <span className="arrow minus" onClick={handleMinus}>
        <KeyboardArrowDownIcon />
      </span>
    </div>
  );
};

export default Quantity;
