import React, {useEffect} from 'react';
import './Footer.css'
import { connect } from "react-redux";
import { openModal, setTotal } from "../../../../../redux/actions";

const Footer = ({ buy, openModal, setTotal }) => {

  useEffect(() => {}, [openModal])

  return (
    <div className="row">
      <footer className="footer">
        <div className="price">
          <h2 className="total-text">Total:</h2>
          <p className="total-price">{buy.price}$</p>
        </div>
        <div className="buy-footer">
          <button onClick={() => {
            setTotal(buy.price);
            openModal();
          }} className="buy-button-footer">
            <p className="buy-footer-text">BUY</p>
          </button>
        </div>
      </footer>
    </div>
  );
};

const mapDispatchToProps = {
  openModal,
  setTotal,
}

const mapStateToProps = state => {
  return {
    buy: state.user.buy,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);