import React, {useEffect, useState} from 'react';
import './Item.css'
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBag } from "react-feather";
import { connect } from "react-redux";
import { setCurrentGood, addSize, addToCart, buyNow } from "../../../../../../redux/actions";

const Item = ({ props, setCurrentGood, addSize, addToCart, size, buyNow }) => {

  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    addSize([...cart])
  }, [addSize, cart])

  const linkTo = () => {
    return size.length !== 0 ? "/buynow" : "";
  }

  const sizes = [ 39, 40, 41, 42, 43, 44 ];

  const sizeStyle = el => {
    return {
      color: cart.indexOf(el) !== -1 ? "#FF9A8D" : null,
      border: props.size.indexOf(el) !== -1 ? "1px solid #222326" : null,
      borderRadius: props.size.indexOf(el) !== -1 ? "5px" : null,
    }
  }

  return (
    <div className="item-container">
      <div className="row">
        <Link className="reset" onClick={() => {
          setCurrentGood(props)
        }} to="/sneaker">
          <img className="item-img" src={props.img} alt=""/>
          <div className="row">
            <p className="item-name">{props.name}</p>
          </div>
        </Link>
        <div className="row">
          <div className="item-sizes">
            {
              sizes.map((el) => <button onClick={() => {
                  setCart(cart.indexOf(el) === -1 && props.size.indexOf(el) !== -1 ? [ ...cart, el ] : cart.filter((e) => e!==el ));
                }} style={sizeStyle(el)} className={"size-icon size-icon__item"}>{el}</button>
              )
            }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="item-buttons">
          <div className="item-price">
            <p className="item-price-name">{props.price}$</p>
          </div>
          <div className="item-actions">
            <button onClick={() => {
              if(cart.length !== 0) {
                addToCart({
                  ...props,
                  id: Date.now().toString(),
                  size: [ ...size ],
                });
                setCart([]);
              }
            }} className="item-button">
              <ShoppingCart size={24} color="#F1FDFF"/>
            </button>
            <Link onClick={() => {
              if(size.length !== 0) {
                buyNow({
                  ...props,
                  id: Date.now().toString(),
                  size: [ ...size ],
                });
                setCart([]);
              }
            }} className="item-button" to={linkTo()}>
              <ShoppingBag size={24} color="#F1FDFF"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setCurrentGood,
  addSize,
  addToCart,
  buyNow
};

const mapStateToProps = state => {
  return {
    size: state.user.sizes,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);