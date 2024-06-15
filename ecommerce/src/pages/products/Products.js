import React, { useState, useEffect } from "react";
import "./products.css";
import CatSlider from "../../components/catSlider/CatSlider";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Button, styled } from "@mui/material";
import Banner from "../../assests/images/banner.jpg";
import Product from "../../components/product/Product";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import SideBar from "../../components/sideBar/SideBar";

const CustomButton = styled(Button)({
  textTransform: "capitalize",
});

const Products = ({ products }) => {
  const navigate = useNavigate();
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [filter, setFilter] = useState("Featured");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleOpenAccount = () => {
    setIsOpenAccount(!isOpenAccount);
  };

  const handleClickAway = () => {
    setIsOpenAccount(false);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setIsOpenAccount(false);
  };

  const handleProductClick = (id) => {
    navigate(`/products/details/${id}`);
  };

  const filterProducts = (category, maxPrice) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (maxPrice !== undefined && maxPrice.length === 2) {
      filtered = filtered.filter(
        (product) =>
          product.price >= maxPrice[0] && product.price <= maxPrice[1]
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    let sortedProducts = [...products];
    // Here you can add any sorting logic based on filter if needed
    setFilteredProducts(sortedProducts);
  }, [filter, products]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
        <section className="products">
          <div className="productsContainer">
            <div className="productHeader">
              <h2>Products</h2>
              <span>
                <Link to="/" className="proHeaderLink">
                  <HomeIcon className="homeIcon" /> Home > Shop > Products
                </Link>
              </span>
            </div>

            <div className="productsData">
              <div className="productsRow">
                <div className="productsCol">
                  <SideBar
                    products={products}
                    filterProducts={filterProducts}
                  />
                </div>
              </div>
              <div className="productRight">
                <div className="topStrip">
                  <h4>
                    We Found <strong>{filteredProducts.length}</strong> products
                    for you!
                  </h4>
                  <div className="sort">
                    <div className="btn" onClick={handleOpenAccount}>
                      <CustomButton className="sortButton">
                        <SortIcon className="sortIcon" /> Sort By : {filter}{" "}
                        <KeyboardArrowDownIcon />
                      </CustomButton>
                    </div>
                    <div className="drop">
                      {isOpenAccount && (
                        <ul className="dropDownBtn">
                          <li>
                            <CustomButton
                              className="dropList"
                              onClick={() => handleFilterChange("Featured")}
                            >
                              Featured
                            </CustomButton>
                          </li>
                          <li>
                            <CustomButton
                              className="dropList"
                              onClick={() =>
                                handleFilterChange("Top Categories")
                              }
                            >
                              Top Categories
                            </CustomButton>
                          </li>
                          <li>
                            <CustomButton
                              className="dropList"
                              onClick={() =>
                                handleFilterChange("Popular Products")
                              }
                            >
                              Popular Products
                            </CustomButton>
                          </li>
                          <li>
                            <CustomButton
                              className="dropList"
                              onClick={() => handleFilterChange("Best Selling")}
                            >
                              Best Selling
                            </CustomButton>
                          </li>
                          <li>
                            <CustomButton
                              className="dropList"
                              onClick={() => handleFilterChange("Top Rated")}
                            >
                              Top Rated
                            </CustomButton>
                          </li>
                          <li>
                            <CustomButton
                              className="dropList"
                              onClick={() => handleFilterChange("Must Buy")}
                            >
                              Must Buy
                            </CustomButton>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className="productsRow">
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
            </div>
          </div>
        </section>
        <CatSlider />
        <div className="banner">
          <img src={Banner} className="bannerImg" alt="Banner" />
          <div className="bannerInfo">
            <h2>
              Sale is Live! Grab It
              <br />
              Shop Now
            </h2>
            <span>Festival offers and Many More!</span>
            <div className="newsLetterBanner">
              <input type="email" placeholder="Get updates via email..." />
              <Button className="subscribeBtn">Subscribe</Button>
            </div>
          </div>
        </div>
      </>
    </ClickAwayListener>
  );
};

export default Products;
