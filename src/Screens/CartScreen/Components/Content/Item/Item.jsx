import React, {useEffect} from 'react';
import './Item.css'
import {X} from "react-feather";
import {connect} from "react-redux";
import {removeFromCart} from "../../../../../redux/actions";

const Item = ({props, cart, removeFromCart}) => {

  useEffect(() => {

  }, [cart])

  const sizes = [39, 40, 41, 42, 43, 44];

  return (
    <div className="item-container">
      <div className="row">
        <img className="item-img" src={props.img} alt=""/>
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
              }} className={"size-icon-width"}>{el}</p>
            )
          }
        </div>
      </div>
      <div className="row">
        <div className="item-buttons">
          <div className="item-price">
            <p className="item-price-name">{props.price}$</p>
          </div>
          <div className="item-actions">
            <button onClick={() => {
              removeFromCart(props.id)
            }} className="item-delete">
              <X size={24} color="#F1FDFF"/>
            </button>
          </div>
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