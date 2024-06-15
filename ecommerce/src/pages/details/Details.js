import React, { useContext, useState } from "react";
import "./details.css";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useParams } from "react-router-dom";
import ProSlider from "../../components/productSlider/ProSlider";
import { CartContext } from "../../CartContext";

const Details = ({ products }) => {
  const [inputValue, setInputValue] = useState(1);
  const [activeTabs, setActiveTabs] = useState(0);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const [reviewFields, setReviewFields] = useState({
    rating: 0,
    review: "",
    name: "",
  });
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const plus = () => {
    if (inputValue !== 50) {
      setInputValue(inputValue + 1);
    }
  };

  const minus = () => {
    if (inputValue !== 1) {
      setInputValue(inputValue - 1);
    }
  };

  const changeInput = (name, value) => {
    setReviewFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const submitReview = (e) => {
    e.preventDefault();
    alert("Review Submitted");
    const newReview = {
      rating: reviewFields.rating,
      review: reviewFields.review,
      name: reviewFields.name,
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setReviewFields({
      rating: 0,
      review: "",
      name: "",
    });
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      imgSrc: product.imgSrc,
      brand: product.brand,
      title: product.title,
      rating: product.rating,
      price: product.price,
      brandLink: product.brandLink,
      productLink: product.productLink,
    };
    addToCart(productToAdd);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); // Reset the button text after 2 seconds
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="details">
      <div className="detailsContainerWrapper">
        <div className="detailsContainer">
          <ul className="breadCrumb">
            <li>
              <Link className="link" to="/">
                Home /
              </Link>{" "}
            </li>
            <li>
              <Link className="link" to="/products">
                Products /
              </Link>{" "}
            </li>
            <li>{product.title}</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="detailsContainerRow">
          <div className="detailsContainerCol1">
            <div className="imgZoom">
              <InnerImageZoom
                src={product.imgSrc}
                zoomType="hover"
                zoomScale={1}
              />
            </div>
          </div>

          <div className="detailsContainerCol2">
            <h2 className="detailTitle">{product.title}</h2>
            <div className="ratingInfo">
              <Rating
                className="rating"
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                value={product.rating}
                readOnly
              />
              <span className="ratingReviews">(1)</span>
            </div>
            <div className="priceInfo">
              <span className="price">Rs {product.price}</span>
              <div className="priceOff">
                <span className="perOff">15% off</span>
                {/* <span className="oldPrice">Rs 800</span> */}
              </div>
            </div>
            <span className="detailText">
              <p>{product.description}</p>
            </span>

            <div className="addCartSection">
              <div className="counterSection">
                <input type="number" value={inputValue} />
                <span className="arrow plus" onClick={plus}>
                  <KeyboardArrowUpIcon />
                </span>
                <span className="arrow minus" onClick={minus}>
                  <KeyboardArrowDownIcon />
                </span>
              </div>
              <div className="addToCart">
                <Button
                  className="addBtn"
                  onClick={handleAddToCart}
                  disabled={isAdded}
                >
                  <ShoppingCartIcon className="cartIcon" />
                  {isAdded ? "Added" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cardDetails">
        <div className="customTabs">
          <ul className="tabLists">
            <li className="tabItem">
              <Button className="tabButton" onClick={() => setActiveTabs(0)}>
                Description
              </Button>
            </li>
            <li className="tabItem">
              <Button onClick={() => setActiveTabs(1)} className="tabButton">
                Additional Info
              </Button>
            </li>
            <li className="tabItem">
              <Button className="tabButton" onClick={() => setActiveTabs(2)}>
                {" "}
                Reviews{" "}
              </Button>
            </li>
          </ul>
        </div>

        {activeTabs === 0 && (
          <div className="tabContent">
            <strong style={{ letterSpacing: "0.8px" }}>
              {product.description}
            </strong>
            <br />
            <br />
            <p>Top Quality and Premium Product.</p>
            <br />
            <h4>Contents and Packaging</h4>
            <p>
              Our product is meticulously crafted to ensure a delightful
              experience from the moment you receive it. Inside the carefully
              designed packaging, you'll find a treasure trove of carefully
              curated items that exceed expectations.
            </p>
            <br />
            <p>
              The contents are thoughtfully selected to cater to your needs and
              desires. Each item is of premium quality, meticulously inspected
              to ensure it meets our high standards. From the vibrant colors to
              the intricate details, every aspect is designed to enhance your
              experience.
            </p>
            <br />
            <h4>Free Delivery</h4>
            <p>
              We understand the importance of convenience, which is why we offer
              free delivery straight to your doorstep. No need to worry about
              additional costs or delays—your order will arrive promptly and in
              perfect condition.
              <br />
              Our commitment to exceptional service extends to every aspect of
              your shopping experience, including hassle-free delivery. Sit
              back, relax, and enjoy the convenience of receiving your order
              without any extra fees.
              <br />
              Experience the joy of receiving a meticulously crafted product
              with free, convenient delivery. Order now and elevate your
              shopping experience today!
            </p>
          </div>
        )}

        {activeTabs === 1 && (
          <div className="tabContent">
            <div className="table">
              <table className="tableInfo">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Weight</td>
                    <td>{product.weight}</td>
                  </tr>
                  <tr>
                    <td>Dimensions</td>
                    <td>{product.dimensions}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>{product.material}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>{product.color}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>{product.brand}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTabs === 2 && (
          <div className="tabContent">
            <h4>Customer Rating & Reviews</h4>
            <br />
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="reviewRow">
                  <div className="reviewCol1">
                    <div className="review">
                      <div className="reviewPerson">
                        <div className="image">
                          <AccountCircleIcon className="personImg" />
                          <h3 className="personName">{review.name}</h3>
                        </div>
                        <div className="personsReview">
                          <div className="reviewInfo">
                            <Rating
                              className="rating"
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              value={review.rating}
                              readOnly
                            />
                            <p className="reviewDate">Recently</p>
                          </div>
                          <p>{review.review}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
            <div className="reviewCol2">
              <div className="addReview">
                <h3 className="addReviewHeading">Add a Review</h3>
                <form
                  action=""
                  className="reviewForm"
                  onSubmit={(e) => submitReview(e)}
                >
                  <div>
                    <Rating
                      name="rating"
                      className="rating"
                      value={reviewFields.rating}
                      precision={0.5}
                      required
                      onChange={(e, value) => changeInput("rating", value)}
                    />
                  </div>
                  <textarea
                    name="review"
                    id=""
                    placeholder="Write your views..."
                    className="reviewTextArea"
                    value={reviewFields.review}
                    required
                    onChange={(e) => changeInput(e.target.name, e.target.value)}
                  ></textarea>
                  <div className="personDetails">
                    <input
                      type="text"
                      name="name"
                      className="reviewInput"
                      placeholder="Name..."
                      required
                      value={reviewFields.name}
                      onChange={(e) =>
                        changeInput(e.target.name, e.target.value)
                      }
                    />
                  </div>

                  <Button type="submit" className="submitBtn">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="addReviewMain">
        <h3 className="addReviewHeading">Write a Review</h3>
        <form
          action=""
          className="reviewForm"
          onSubmit={(e) => submitReview(e)}
        >
          <div>
            <Rating
              name="rating"
              className="rating"
              value={reviewFields.rating}
              precision={0.5}
              onChange={(e, value) => changeInput("rating", value)}
              required
            />
          </div>
          <textarea
            name="review"
            id=""
            placeholder="Write your views..."
            className="reviewTextArea"
            value={reviewFields.review}
            required
            onChange={(e) => changeInput(e.target.name, e.target.value)}
          ></textarea>
          <div className="personDetails">
            <input
              type="text"
              name="name"
              className="reviewInput"
              placeholder="Name..."
              required
              value={reviewFields.name}
              onChange={(e) => changeInput(e.target.name, e.target.value)}
            />
          </div>

          <Button type="submit" className="submitBtn">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Details;
