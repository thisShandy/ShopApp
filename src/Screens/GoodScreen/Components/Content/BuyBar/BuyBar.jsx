import React from 'react';
import "./BuyBar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import { connect } from "react-redux";
import { addToCart } from "../../../../../redux/actions";
import { buyNow } from "../../../../../redux/actions";

const BuyBar = ({ size, current, addToCart, buyNow }) => {

  const linkTo = () => {
    return size.length !== 0 ? "/buynow" : "";
  }

  return (
    <div className="row buy-buttons">
      <h3 className="price">{current.price}$</h3>
      <div className="good-buttons">
        <button onClick={() => {
          if(size.length !== 0) {
            addToCart({
              ...current,
              id: Date.now().toString(),
              size: [ ...size ],
            });
          }
        }} className="good-buy-button">
          <ShoppingCart />
        </button>
        <Link onClick={() => {
          if(size.length !== 0) {
            buyNow({
              ...current,
              id: Date.now().toString(),
              size: [ ...size ],
            });
          }
        }} className="good-buy-button" to={linkTo()} >Buy now</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
  buyNow,
};

const mapStateToProps = state => {
  return {
    current: state.goods.current,
    size: state.user.sizes,
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(BuyBar);