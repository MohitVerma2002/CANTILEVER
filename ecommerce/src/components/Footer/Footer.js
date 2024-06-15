import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Facebook from "../../assests/images/facebook.png";
import Instagram from "../../assests/images/instagram.png";
import Twitter from "../../assests/images/twitter.png";
import LinkedIn from "../../assests/images/linkedin.png";
import Github from "../../assests/images/github.png";
import Playstore from "../../assests/images/playstore.png";
import Visa from "../../assests/images/visa.png";
import Mastercard from "../../assests/images/mastercard.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerTop">
            <div className="footerLogo">
              <h1>
                <a href="/">VeloxMart</a>{" "}
              </h1>
            </div>
            <div className="footerSocial">
              <h6>Folow us on:</h6>
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/mohit_verma_25/">
                <img src={Instagram} alt="" />
              </a>
              <a href="https://www.x.com/">
                <img src={Twitter} alt="" />
              </a>
              <a href="http://linkedin.com/in/mohit-verma-b73b67227">
                <img src={LinkedIn} alt="" />
              </a>
              <a href="https://github.com/MohitVerma2002">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className="footerMiddle">
            <div className="footerRow">
              <div className="footerCol">
                <h4>Top Products</h4>
                <Link to="/products" className="footerLink">
                  <span>Clothing</span>
                </Link>
                <Link to="/products " className="footerLink">
                  <span>Food Items</span>
                </Link>
                <Link to="/products" className="footerLink">
                  <span>Beauty and Cosmetics</span>
                </Link>
                <Link to="/products" className="footerLink">
                  <span>Electronics</span>
                </Link>
                <Link to="/products" className="footerLink">
                  <span>Groceries</span>
                </Link>
              </div>
              <div className="footerCol">
                <h4>Contact Us</h4>
                <span>Need Help?</span>
                <span>Email : veloxmart.help@gmail.com</span>
                <span>Phone No : 1800-900-1800</span>
                <span>Baijnath, Hp</span>
                <br />
                <br />
              </div>

              <div
                className="footerCol map"
                style={{ width: "600", loading: "lazy", height: "450" }}
              >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27053.988925335085!2d76.63101709542106!3d32.048995134445185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b82cdc03fff1%3A0xd4c65911e2efd7ea!2sBaijnath%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1717410530682!5m2!1sen!2sin"></iframe>
              </div>

              <div className="footerCol">
                <h4> User Agrement</h4>
                <Link
                  to="https://docs.google.com/document/d/1sohGeyzYhA_8s_iSVtpfiqb2j5NIce2iKwFM_i6Ma-g/edit"
                  className="footerLink"
                >
                  <span>Terms of Condition</span>
                </Link>
                <Link
                  to="https://docs.google.com/document/d/1sohGeyzYhA_8s_iSVtpfiqb2j5NIce2iKwFM_i6Ma-g/edit"
                  className="footerLink"
                >
                  <span>Privacy Policy</span>
                </Link>
                <h4>Install the app</h4>
                <a href="https://www.googleplay.com/">
                  <img src={Playstore} alt="" />
                </a>
              </div>
              <div className="footerCol">
                <h4>Useful links</h4>
                <Link to="/about" className="footerLink">
                  <span>About Us</span>
                </Link>
                <Link to="/contact" className="footerLink">
                  <span>Contact Us</span>
                </Link>
                <Link
                  to="https://www.instagram.com/mohit_verma_25/"
                  className="footerLink"
                >
                  <span>Instagram</span>
                </Link>
                <Link to="https://www.facebook.com/" className="footerLink">
                  <span>Facebook</span>
                </Link>
                <Link
                  to="http://linkedin.com/in/mohit-verma-b73b67227"
                  className="footerLink"
                >
                  <span>Linked In</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="footerHelpline">
            <div>veloxmart.help@gmail.com</div>
            <div className="paymentIcon">
              <a href="/">
                <img src={Visa} alt="" />
              </a>
              <a href="/">
                <img src={Mastercard} alt="" />
              </a>
            </div>
            <div>Need Help? 1800-900-1800</div>
          </div>
          <div
            className="googleMap"
            style={{ width: "600", loading: "lazy", height: "450" }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27053.988925335085!2d76.63101709542106!3d32.048995134445185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b82cdc03fff1%3A0xd4c65911e2efd7ea!2sBaijnath%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1717410530682!5m2!1sen!2sin"></iframe>
          </div>
          <div className="footerBottom">
            <span className="footerBottomMine">
              Designed By <span>M</span>ohit <span>V</span>erma
            </span>
            <div className="footerCopyright">
              Copyright &copy; 2024 - All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
