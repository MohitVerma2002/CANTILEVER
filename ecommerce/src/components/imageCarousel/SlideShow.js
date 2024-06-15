import React from "react";
import "./slideShow.css";
import Slider from "react-slick";
import slider1 from "../../assests/images/slider1.webp";
import slider2 from "../../assests/images/slider2.webp";
import slider3 from "../../assests/images/slider3.webp";
import slider4 from "../../assests/images/slider4.png";
import slidermain from "../../assests/images/banner.jpg";
import Button from "@mui/material/Button";

const SlideShow = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="imgSlider">
      <div className="imgSliderContainer">
        <Slider {...settings} className="slider">
          <div className="imgItem">
            <img src={slidermain} alt="" className="sliderImage" />
            <div className="imgInfo">
              <h2 className="main">
                Big Discounts
                <br />
                Don't miss the amazing deals
              </h2>
              <span className="main">Save Upto 50%</span>
              <div className="newsLetterBanner">
                <form action="https://formspree.io/f/moqggdbz" method="POST">
                  <input
                    type="email"
                    name="email"
                    placeholder="Subscribe to our newsletter (email) "
                  />
                  <Button type="submit" className="subscribeBtn">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="imgItem">
            <img src={slider4} alt="" className="sliderImage" />
            <div className="imgInfo">
              <h2>
                Big Discounts
                <br />
                Don't miss the amazing deals
              </h2>
              <span>Save Upto 50%</span>
              <div className="newsLetterBanner">
                <form action="https://formspree.io/f/moqggdbz" method="POST">
                  <input
                    type="email"
                    name="email"
                    placeholder="Subscribe to our newsletter (email) "
                  />
                  <Button type="submit" className="subscribeBtn">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="imgItem">
            <img src={slider1} alt="" className="sliderImage" />
          </div>

          <div className="imgItem">
            <img src={slider2} alt="" className="sliderImage" />
          </div>

          <div className="imgItem">
            <img src={slider3} alt="" className="sliderImage" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SlideShow;
