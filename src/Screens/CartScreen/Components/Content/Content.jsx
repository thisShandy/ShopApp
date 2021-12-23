import React, { useEffect } from 'react';
import "./Content.css";
import Item from "./Item/Item";
import { connect } from "react-redux";

const Content = ({ cart }) => {

  useEffect(() => {

  }, [cart])

  return (
    <div className="content-container">
      {
        cart.length > 0 ? cart.map((el) => <Item key={el.key} props={el} />)
        :
        <h2 className="empty-cart">Your cart is empty</h2>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.user.cart,
  };
};

export default connect( mapStateToProps, null )(Content);