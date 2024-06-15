import React, { useContext, useEffect } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import Quantity from "../../components/quantityBox/Quantity";
import { CartContext } from "../../CartContext";
import AuthContext from "../../AuthContext";

const Cart = ({ setTotalAmount }) => {
  const { cart, clearCart, removeFromCart, updateQuantity } =
    useContext(CartContext);
  const { isLogin } = useContext(AuthContext);

  const getTotalPrice = () => {
    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
    return total;
  };

  return (
    <div className="cart">
      <div className="cartTop">
        <ul className="breadCrumb">
          <li>
            <Link className="link" to="/">
              Home /
            </Link>{" "}
          </li>
          <li>
            <Link className="link" to="/products">
              Shop /
            </Link>{" "}
          </li>
          <li>Cart</li>
        </ul>
      </div>

      <section className="cartMiddle">
        {isLogin ? (
          <div className="cartContainer">
            <h1 className="heading">Your Cart</h1>
            <div className="row">
              <div className="col1">
                <div className="cartHeading">
                  <div className="left">
                    <p className="text">
                      There are <span className="textNum">{cart.length}</span>{" "}
                      Items in your cart
                    </p>
                  </div>
                  <div className="right">
                    <span className="clearCart" onClick={clearCart}>
                      Clear <DeleteForeverIcon className="clearIcon" />
                    </span>
                  </div>
                </div>

                <div className="cartWrapper">
                  <div className="cartTable">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Unit Price</th>
                          <th>Quantity</th>
                          <th>SubTotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="title">
                                <div className="img">
                                  <Link className="link">
                                    <img src={item.imgSrc} alt={item.title} />
                                  </Link>
                                </div>
                                <div className="titleText">
                                  <Link className="link">
                                    <h3>{item.title}</h3>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="price">Rs {item.price}</td>
                            <td>
                              <Quantity
                                value={item.quantity}
                                onChange={(newQuantity) =>
                                  updateQuantity(item.id, newQuantity)
                                }
                              />
                            </td>
                            <td className="subTotal">
                              Rs {item.price * item.quantity}
                            </td>
                            <td className="remove">
                              <DeleteForeverIcon
                                onClick={() => removeFromCart(item.id)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="rightContainer">
                  <div className="attribute">Sub - Total</div>
                  <div className="amount">Rs {getTotalPrice()}</div>
                </div>
                <div className="rightContainer">
                  <div className="attribute">Shipping Cost</div>
                  <div className="amount">Free</div>
                </div>
                <div className="rightContainer">
                  <div className="attribute">Country</div>
                  <div className="amount">India</div>
                </div>

                <div className="rightContainer total">
                  <div className="attribute">Total</div>
                  <div className="amount">Rs {getTotalPrice()} /-</div>
                </div>
                <div className="rightContainer button">
                  <Link to={"/checkout"} className="link">
                    {" "}
                    <Button className="checkoutBtn">Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>You need to log in to access your cart.</p>
            <br />
            <Link to="/login">Log in</Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
