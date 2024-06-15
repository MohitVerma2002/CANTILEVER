import React from "react";
import "./topProducts.css";
import Rating from "@mui/material/Rating";
import Tshirts from "../../assests/images/tshirts.png";
import { Link } from "react-router-dom";

const TopProducts = () => {
  return (
    <>
      <section className="topProducts">
        <div className="topProductsContainer">
          <div className="topProductsRow">
            <div className="col">
              <h4 className="titleHeading">Top Selling</h4>
              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>
            </div>

            <div className="col">
              <h4 className="titleHeading">Top Rated</h4>
              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>
            </div>

            <div className="col">
              <h4 className="titleHeading">Trending Products</h4>
              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>
            </div>

            <div className="col">
              <h4 className="titleHeading">Recently Added</h4>
              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>

              <div className="info">
                <div className="infoImg">
                  <img src={Tshirts} alt="" />
                </div>
                <div className="infoItems">
                  <Link className="infoLink">
                    T-shirt (100% cotton) <br />
                    Top quality fabric
                  </Link>
                  <br />
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={3.5}
                    readOnly
                  />
                  <br />
                  <span className="price">Rs 600 /-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProducts;
