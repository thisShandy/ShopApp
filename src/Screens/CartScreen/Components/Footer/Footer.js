import React from 'react';
import './Footer.css'
import { connect } from "react-redux";
import { setTotal, openModal } from "../../../../redux/actions";

const Footer = ({ cart, setTotal, openModal }) => {

  const getTotalPrice = ( prev, current ) => current + prev;

  return (
    <div className="row">
      <footer className="footer">
        <div className="price">
          <h2 className="total-text">Total:</h2>
          <p className="total-price">{cart.length !== 0 ? cart.map(el => el.price).reduce(getTotalPrice) : 0}$</p>
        </div>
        <div className="buy-footer">
          <button onClick={() => {
            if (cart.length !== 0) {
              setTotal(cart.map(el => el.price).reduce(getTotalPrice));
              openModal();
            }
          }} className="buy-button-footer">
            <p className="buy-footer-text">BUY</p>
          </button>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.user.cart,
  };
};

const mapDispatchToProps = {
  setTotal,
  openModal,
};

export default connect(mapStateToProps ,mapDispatchToProps)(Footer);