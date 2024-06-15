import React, { useState, useEffect } from "react";
import "./checkout.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const CheckOut = ({ totalAmount }) => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    email: "",
  });

  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    initiatePayment();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initiatePayment = () => {
    const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      alert("Razorpay Key ID is not defined. Check your .env file.");
      return;
    }

    const options = {
      key: razorpayKey, // Ensure you're using the correct
      key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
      amount: Math.round(totalAmount * 100), // Amount is in paise (smallest unit of currency in India)
      currency: "INR",
      name: "Velox Mart",
      description: "Test Transaction",
      handler: function (response) {
        alert(
          `Payment successful. Payment ID: ${response.razorpay_payment_id}`
        );
        // Handle post-payment actions here
      },
      prefill: {
        name: formFields.fullName,
        email: formFields.email,
        contact: "9999999999", // You can add a phone number field in the form
      },
      notes: {
        address: `${formFields.address}, ${formFields.city}, ${formFields.state}`,
      },
      theme: {
        color: "#3399cc",
      },
    };

    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        alert(`Payment failed. Reason: ${response.error.reason}`);
      });
      rzp.open();
    } else {
      alert("Razorpay SDK failed to load. Are you online?");
    }

    setFormFields({
      fullName: "",
      company: "",
      address: "",
      city: "",
      state: "",
      email: "",
    });

    // Redirect to homepage after successful payment
    navigate("/");
  };

  return (
    <section className="checkout">
      <div className="checkoutContainer">
        <h2 className="checkoutHeading">Billing details</h2>
        <form onSubmit={handleSubmit}>
          <div className="checkoutMain">
            <div className="checkoutLeft">
              <div className="checkOutForm">
                <TextField
                  id="outlined-basic"
                  error={!formFields.fullName}
                  name="fullName"
                  onChange={onChangeInput}
                  className="checkoutInput"
                  label="Full Name"
                  required
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="checkOutForm">
                <TextField
                  id="outlined-basic"
                  onChange={onChangeInput}
                  name="company"
                  className="checkoutInput"
                  label="Company Name (optional)"
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="checkOutForm">
                <TextField
                  id="outlined-basic"
                  error={!formFields.address}
                  onChange={onChangeInput}
                  name="address"
                  className="checkoutInput"
                  label="Address"
                  required
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="checkOutForm">
                <TextField
                  id="outlined-basic"
                  error={!formFields.city}
                  onChange={onChangeInput}
                  name="city"
                  className="checkoutInput"
                  label="Town/City"
                  required
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="checkOutForm">
                <TextField
                  id="outlined-basic"
                  error={!formFields.state}
                  onChange={onChangeInput}
                  name="state"
                  className="checkoutInput"
                  label="State"
                  required
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="checkOutForm">
                <TextField
                  id="outlined-basic"
                  error={!formFields.email}
                  onChange={onChangeInput}
                  name="email"
                  className="checkoutInput"
                  label="Email"
                  required
                  size="small"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="checkoutRight">
              <div className="orderInfo">
                <h4 className="orderHeading">Your Order</h4>
                <div className="tableContainer">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total</td>
                        <td>Rs {totalAmount}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="payButton">
                    <Link className="link">
                      {" "}
                      <Button
                        onClick={handleSubmit}
                        type="submit"
                        className="payBtn"
                      >
                        PAY NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOut;
