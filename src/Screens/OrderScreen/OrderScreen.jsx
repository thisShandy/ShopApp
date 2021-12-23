import React from "react";
import "./OrderScreen.css";
import {Link} from "react-router-dom";

const OrderScreen = () => {
  return (
    <div className="order-screen-content">
      <h1 className="thanks-text">Thank you for order!</h1>
      <Link className="go-home" to="/" >Go home</Link>
    </div>
  );
};

export default OrderScreen;