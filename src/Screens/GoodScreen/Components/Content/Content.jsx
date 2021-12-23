import React, {useEffect, useState} from "react";
import "./Content.css";
import { connect } from "react-redux";
import BuyBar from "./BuyBar/BuyBar";
import { addSize } from "../../../../redux/actions";

const Content = ({ current, addSize }) => {

  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    addSize([...cart])
  }, [addSize, cart])

  const sizes = [ 39, 40, 41, 42, 43, 44 ];

  const sizeStyle = el => {
    return {
      color: cart.indexOf(el) !== -1 ? "#FF9A8D" : null,
      border: current.size.indexOf(el) !== -1 ? "1px solid #222326" : null,
      borderRadius: current.size.indexOf(el) !== -1 ? "5px" : null,
    }
  }

  return (
    <div className="row good-content">
      <div className="row description-content">
        <img className="good-img" src={ current.img } alt="#"/>
        <div className="description-text">
            <h3 className="description-name">{ current.name }</h3>
            <div className="item-sizes item-sizes__goods">
              {
                sizes.map((el) => <button onClick={() => {
                    setCart(cart.indexOf(el) === -1 && current.size.indexOf(el) !== -1 ? [ ...cart, el ] : cart.filter((e) => e!==el ));
                  }} style={sizeStyle(el)} className={"size-icon size-icon__goods"}>{el}</button>
                )
              }
          </div>
          <p className="description-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi culpa distinctio ea eius ipsa laboriosam magni maxime nisi nostrum officiis, perferendis quae quam quod repellendus sit, sunt suscipit voluptatum! Atque consequatur dicta dolore doloremque esse facere impedit minus nemo, nisi nobis repudiandae rerum saepe totam ut voluptatum. Cumque doloremque iure mollitia rerum totam?</p>
        </div>
      </div>
      <BuyBar />
    </div>
  );
};

const mapDispatchToProps = {
  addSize,
}

const mapStateToProps = state => {
  return {
    current: state.goods.current,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);