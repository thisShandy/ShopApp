import React, { useEffect } from "react";
import "./Item.css";
import { X } from "react-feather";
import { connect } from "react-redux";
import { removeFromCart } from "../../../../../redux/actions";

const Item = ({props, cart, removeFromCart}) => {

  useEffect(() => {

  }, [cart])

  const sizes = [39, 40, 41, 42, 43, 44];

  return (
    <div className="item-container item-container__buy-now">
      <div className="row">
        <img className="item-img item-img__buy-now" src={props.img} alt=""/>
      </div>
      <div className="row">
        <p className="item-name">{props.name}</p>
      </div>
      <div className="row">
        <div className="item-sizes">
          {
            sizes.filter((el) => props.size.indexOf(el) !== -1).map((el) => <p style={{
                border: "1px solid #222326",
                borderRadius: "5px"
              }} className={"size-icon-width size-icon-width__buy-now"}>{el}</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeFromCart,
}

const mapStateToProps = state => {
  return {
    cart: state.user.cart
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);