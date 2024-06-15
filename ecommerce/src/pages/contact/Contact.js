import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import Facebook from "../../assests/images/facebook.png";
import Instagram from "../../assests/images/instagram.png";
import Twitter from "../../assests/images/twitter.png";
import LinkedIn from "../../assests/images/linkedin.png";
import Github from "../../assests/images/github.png";
import { Button } from "@mui/base";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="contactTop">
          <ul>
            <li>
              <Link to="/" className="link">
                Home /
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="contactMain">
          <div className="contactLeft">
            <h2>Contact Us</h2>
            <br />
            <h3>Email:</h3>
            <br />
            <span>For general inquiries and support, please email us at:</span>
            <br />
            <span>veloxmart.help@gmail.com</span>
            <br />
            <br />
            <h3>Our Mailing Address :</h3>
            <br />
            <span>VeloxMart</span>
            <br />
            <span>Baijnath , HP</span>
            <br />
            <span>India</span>
            <br />
            <br />
            <h3>Phone :</h3>
            <br />
            <span>You can also reach our customer service team by phone:</span>
            <br />
            <span>+1 1800-900-1800</span>
            <br />
            <span>Available Monday to Friday, 9:00 AM - 6:00 PM (EST)</span>
            <br />
            <br />
            <div className="contactSocial">
              <h3>Folow us on:</h3>
              <br />
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
          <div className="contactRight">
            <div className="contactForm">
              <h2>Lets Have a Talk !</h2>
              <form action="https://formspree.io/f/moqggdbz" method="POST">
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Name..."
                />
                <br />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email..."
                />
                <br />
                <textarea
                  name="message"
                  id=""
                  required
                  placeholder="Message..."
                ></textarea>
                <br />
                <Button type="submit" className="subBtn">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
