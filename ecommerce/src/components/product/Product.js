import React, { useContext, useState } from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CartContext } from "../../CartContext";

const Product = ({
  id,
  imgSrc,
  brand,
  title,
  rating,
  price,
  brandLink,
  productLink,
}) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const product = {
      id,
      imgSrc,
      brand,
      title,
      rating,
      price,
      brandLink,
      productLink,
    };
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); // Reset the button text after 2 seconds
  };

  const handleProductClick = (id) => {
    navigate(`/products/details/${id}`);
  };

  return (
    <div className="product">
      <div className="imgwrapper" onClick={() => handleProductClick(id)}>
        <img src={imgSrc} alt={title} width="100px" />
        <div className="overview">
          <a className="viewIcon">
            <VisibilityIcon />
          </a>
        </div>
      </div>
      <div className="productInfo">
        <span className="brand">{brand}</span>
        <h4>
          <span onClick={() => handleProductClick(id)} className="title">
            {title}
          </span>
        </h4>
        <Rating
          className="rating"
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          value={rating}
          readOnly
        />
        <br />
        <span className="brandName">
          By{" "}
          <Link to={brandLink} className="brName">
            {brand}
          </Link>
        </span>
        <div className="productBuy">
          <span className="price">Rs {price} /-</span>
          <Button
            className="addItem"
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? "Added" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
