import React from "react";
import "./proslider.css";
import Slider from "react-slick";
import Product from "../../components/product/Product";

const ProSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="proSlider">
      <div className="proSliderContainer">
        <h2 className="proHeading">More products</h2>
        <Slider {...settings} className="proSliderItem">
          {products.map((product, index) => (
            <div key={index} className={`item bg${(index % 2) + 1}`}>
              <Product
                imgSrc={product.imgSrc}
                brand={product.brand}
                title={product.title}
                rating={product.rating}
                price={product.price}
                brandLink={product.brandLink}
                productLink={product.productLink}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProSlider;
