import React, { useState } from "react";
import "./sideBar.css";
import Cloth from "../../assests/images/cloth.png";
import Slider from "@mui/material/Slider";
import { Box, Button, Checkbox } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function valuetext(value) {
  return `${value}°C`;
}

const SideBar = ({ products, filterProducts }) => {
  const [value, setValue] = useState([100, 25000]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // State to hold selected category
  const [category, setCategory] = useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterProducts(category, newValue); // Update filter function call with new value
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    filterProducts(selectedCategory === "All" ? "" : selectedCategory, value); // Update filter function call with selected category
  };

  return (
    <div className="sideBar">
      <div className="card">
        <h3>Filter products</h3>
        <div className="cardList">
          <div className="cardItem">
            <Box className="sliderBox" sx={{ width: 220 }}>
              <Slider
                className="slider"
                getAriaLabel={() => "Temperature range"}
                value={value}
                min={0}
                step={1}
                max={60000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="success"
              />
            </Box>

            <div className="sliderText">
              <span>
                From: <strong> Rs {value[0]}</strong>
              </span>
              <span>
                To: <strong> Rs {value[1]}</strong>
              </span>
            </div>

            <div className="filters">
              <h5>Products</h5>
              <ul>
                <li>
                  <Checkbox
                    {...label}
                    value="All"
                    onChange={handleCategoryChange}
                    checked={category === "All"}
                  />{" "}
                  All
                </li>
                <li>
                  <Checkbox
                    {...label}
                    value="Electronics"
                    onChange={handleCategoryChange}
                    checked={category === "Electronics"}
                  />{" "}
                  Electronics
                </li>
                <li>
                  <Checkbox
                    {...label}
                    value="Clothing"
                    onChange={handleCategoryChange}
                    checked={category === "Clothing"}
                  />{" "}
                  Clothing
                </li>
                <li>
                  <Checkbox
                    {...label}
                    value="Food products"
                    onChange={handleCategoryChange}
                    checked={category === "Food products"}
                  />{" "}
                  Dairy & Food Products
                </li>
                <li>
                  <Checkbox
                    {...label}
                    value="Toys"
                    onChange={handleCategoryChange}
                    checked={category === "Toys"}
                  />{" "}
                  Pet Food and Toys
                </li>
                <li>
                  <Checkbox
                    {...label}
                    value="Beauty & Cosmetic"
                    onChange={handleCategoryChange}
                    checked={category === "Beauty & Cosmetic"}
                  />{" "}
                  Beauty and Cosmetics
                </li>
                <li>
                  <Checkbox
                    {...label}
                    value="Fruits & Vegies"
                    onChange={handleCategoryChange}
                    checked={category === "Fruits & Vegies"}
                  />{" "}
                  Fruits and Vegetables
                </li>
              </ul>
              <Button
                className="filterButton"
                onClick={() =>
                  filterProducts(category === "All" ? "" : category, value)
                }
              >
                <FilterAltIcon className="filterIcon" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Categories</h3>
        <div className="cardList">
          <div className="cardItem">
            <div className="itemInfo">
              <img src={Cloth} alt="Category Item" />
              <span> Clothing </span>
              <p>20</p>
            </div>
            <div className="itemInfo">
              <img src={Cloth} alt="Category Item" />
              <span> Beauty & Cosmetics </span>
              <p>20</p>
            </div>
            <div className="itemInfo">
              <img src={Cloth} alt="Category Item" />
              <span> Milk & Dairy </span>
              <p>20</p>
            </div>
            <div className="itemInfo">
              <img src={Cloth} alt="Category Item" />
              <span> Packed Food Items </span>
              <p>20</p>
            </div>
            <div className="itemInfo">
              <img src={Cloth} alt="Category Item" />
              <span> Electronics</span>
              <p>20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
