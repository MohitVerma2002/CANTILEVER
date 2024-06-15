import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import SlideShow from "../../components/imageCarousel/SlideShow";
import CatSlider from "../../components/catSlider/CatSlider";
import Product from "../../components/product/Product";
import Banner from "../../assests/images/banner.jpg";
import { Button } from "@mui/material";
import ProSlider from "../../components/productSlider/ProSlider";

const Home = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <SlideShow />
      <CatSlider />
      <section className="homeProducts">
        <div className="homeProductsContainer">
          <div className="productTags">
            <h2>Popular products</h2>
            <span className="filter">Filter by category :</span>
            <ul className="productList">
              <li
                className="productItem"
                onClick={() => handleCategoryClick("All")}
              >
                <a>All</a>
              </li>
              <li
                className="productItem"
                onClick={() => handleCategoryClick("Clothing")}
              >
                <a>Clothing</a>
              </li>
              <li
                className="productItem"
                onClick={() => handleCategoryClick("Food products")}
              >
                <a>Food products</a>
              </li>
              <li
                className="productItem"
                onClick={() => handleCategoryClick("Beauty & Cosmetic")}
              >
                <a>Beauty & Cosmetic</a>
              </li>
              <li
                className="productItem"
                onClick={() => handleCategoryClick("Fruits & Vegies")}
              >
                <a>Fruits & Vegies</a>
              </li>
              <li
                className="productItem"
                onClick={() => handleCategoryClick("Electronics")}
              >
                <a>Electronics</a>
              </li>
            </ul>
          </div>

          <div className="productRow">
            {filteredProducts.map((product) => (
              <div className="item" key={product.id}>
                <Product
                  imgSrc={product.imgSrc}
                  id={product.id}
                  brand={product.brand}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  brandLink={product.brandLink}
                  productLink={product.productLink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProSlider products={products} />
      <div className="banner">
        <img src={Banner} className="bannerImg" alt="" />
        <div className="bannerInfo">
          <h2>
            Sale is Live! Grab It
            <br />
            Shop Now
          </h2>
          <span>Festival offers and Many More!</span>
          <div className="newsLetterBanner">
            <form action="https://formspree.io/f/moqggdbz" method="POST">
              <input
                type="email"
                name="email"
                required
                placeholder="Subscribe to our newsletter (email) "
              />
              <Button type="submit" className="subscribeBtn">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <CatSlider />
    </>
  );
};

export default Home;
