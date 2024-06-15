import React from "react";
import "./notFound.css";
import Notfound from "../../assests/images/404.jpg"; // Ensure the correct path
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // Assume you want to link back to the home page
import HomeIcon from "@mui/icons-material/Home";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="notFoundContainer">
        <div className="box">
          <img src={Notfound} alt="Not Found" />
        </div>
        <div className="backBtn">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button className="button" variant="contained" color="primary">
              <HomeIcon className="backIcon" />
              Back to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
