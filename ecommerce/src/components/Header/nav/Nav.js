import React, { useEffect } from "react";
import "./nav.css";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Products from "../../../assests/images/products.jpg";
import "../../../responsive.css";
import CloseIcon from "@mui/icons-material/Close";

const Nav = (props) => {
  return (
    <>
      <div
        className={`navOverlay ${props.openMenu ? "show" : ""}`}
        onClick={props.handleMenuClick}
      ></div>
      <div className={`nav ${props.openMenu ? "open" : ""}`}>
        <div className="navContainer">
          <ul className="navItems">
            <div className="closeIcon" onClick={props.handleMenuClick}>
              <CloseIcon />
            </div>
            <li className="navList" onClick={props.closeMenu}>
              <Link className="navLink" to="/">
                Home
              </Link>
            </li>
            <li className="navList" onClick={props.closeMenu}>
              <Link className="navLink" to="/about">
                About
              </Link>
            </li>
            <li className="navList" onClick={props.closeMenu}>
              <Link className="navLink" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="navList" onClick={props.closeMenu}>
              <Link className="navLink" to="/products">
                Shop
              </Link>
            </li>
            <li className="navList" onClick={props.closeMenu}>
              <Link className="navLink" to="/login">
                Login
              </Link>
            </li>
            <li className="navListDrop">
              <Link className="navLink">Product Menu</Link>
              <ArrowDropDownIcon />

              <div className="productsMenu">
                <div className="productsCol">
                  <span>Clothing and Beauty</span>
                  <ul>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          T-shirts
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Jeans
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Men Clothing
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Women Clothing
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Perfumes
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Cosmetics and creams
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </div>

                <div className="productsCol">
                  <span>Groceries and Dairy</span>
                  <ul>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Milk
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Dairy Products
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Toothpaste
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Edibles
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link className="productLink">Fast Food</Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Other Items
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </div>

                <div className="productsCol">
                  <span>Fruits and Vegetables</span>
                  <ul>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Fruits
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Vegetables
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Packed Food Items
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </div>

                <div className="productsCol">
                  <span>Electronics and other Items</span>
                  <ul>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Charger and Cables
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Mobile Phones
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          fans and Tubelights
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          Stationary Items
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="productsMenuBtn">
                        <Link to="/products" className="productLink">
                          More
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </div>

                <div className="productsCol">
                  <img src={Products} alt="" className="productsImage" />
                </div>
              </div>
            </li>
            <li className="navListDrop">
              <Link className="navLink">Pages</Link>
              <ArrowDropDownIcon />

              <div className="pagesMenu">
                <ul>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link className="pagesLink">My account</Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="/about" className="pagesLink">
                        About Us
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="/contact" className="pagesLink">
                        Contact
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="login" className="pagesLink">
                        Login
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="/register" className="pagesLink">
                        Register
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="register" className="pagesLink">
                        Forgot Password
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="/register" className="pagesLink">
                        Reset password
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link className="pagesLink">Privacy Policy</Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link className="pagesLink">Terms of Service</Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="pagesMenuBtn">
                      <Link to="*" className="pagesLink">
                        404 page
                      </Link>
                    </Button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="navService">
            <div className="navServiceIcon">
              <HeadsetMicIcon className="headphoneIcon" />
            </div>
            <div className="navServiceText">
              <span>1800-900-1800</span>
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
