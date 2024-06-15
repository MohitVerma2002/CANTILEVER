import React from "react";
import "./catSlider.css";
import Slider from "react-slick";
import Cosmetics from "../../assests/images/cosmetics.png";
import Drinks from "../../assests/images/drinks.png";
import Dairy from "../../assests/images/milk.png";
import Fruits from "../../assests/images/fruits.png";
import Vegetables from "../../assests/images/vegetables.png";
import Utensils from "../../assests/images/utensils.png";
import Toys from "../../assests/images/toys.png";
import Tshirts from "../../assests/images/tshirts.png";
import Electronics from "../../assests/images/electronics.png";
import Grocery from "../../assests/images/grocery.png";
import { Link } from "react-router-dom";

const CatSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10, // Adjust this to the number of slides needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="catSlider">
      <div className="catSliderContainer">
        <h2 className="catHeading">Featured Categories</h2>
        <Slider {...settings} className="catSliderItem">
          <div className="item bg1">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Cosmetics} alt="" />
                <h4>Cosmetics</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg2">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Drinks} alt="" />
                <h4>Drinks</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg3">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Dairy} alt="" />
                <h4>Milk</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg1">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Fruits} alt="" />
                <h4>Fruits</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg2">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Vegetables} alt="" />
                <h4>Vegetables</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg3">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Utensils} alt="" />
                <h4>Utensils</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg1">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Toys} alt="" />
                <h4>Toys</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg2">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Tshirts} alt="" />
                <h4>Tshirts</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg3">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Electronics} alt="" />
                <h4>Electronics</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
          <div className="item bg2">
            <Link className="link" to="/products">
              <div className="info">
                <img src={Grocery} alt="" />
                <h4>Grocery</h4>
                <p>5 items</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
