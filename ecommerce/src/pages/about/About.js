import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Image from "../../assests/images/about.webp";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutTop">
          <ul>
            <li>
              <Link to="/" className="link">
                Home /
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="aboutMain">
          <div className="aboutLeft">
            <h2>About VeloxMart</h2>
            <br />
            <span>
              Welcome to VeloxMart, your ultimate destination for a seamless and
              delightful shopping experience. At VeloxMart, we believe in making
              online shopping not just a necessity but a pleasure, where
              convenience meets variety, and quality meets affordability.
            </span>
            <br />
            <br />
            <h3>Who We Are</h3>
            <span>
              We pride ourselves on offering an extensive range of products
              across various categories including electronics, fashion, home and
              kitchen, beauty and personal care, sports and outdoors, and much
              more. Our carefully curated collection ensures that you have
              access to the latest and most popular products, all in one place.
            </span>
            <br />
            <br />
            <h3>Join the VeloxMart Community</h3>
            <span>
              We invite you to join our growing community of satisfied customers
              who trust VeloxMart for their shopping needs. Stay updated with
              our latest products, exclusive deals, and special offers by
              subscribing to our newsletter and following us on social media.
            </span>
            <br />
            <span>
              At VeloxMart, we are more than just an ecommerce platform; we are
              your trusted shopping partner, committed to bringing you a
              superior online shopping experience. Thank you for choosing
              VeloxMart.
            </span>
            <br />
            <br />
            <span>Happy Shopping!</span>
            <br />
            <span>VeloxMart Team</span>
          </div>
          <div className="aboutRight">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
