import React from "react";
import "./Parameters.css";
import Size from "./Size/Size";
import Color from "./Color/Color";
import { connect } from "react-redux";
import { filterAction } from "../../../../../redux/actions";

const Parameters = ({ filterAction }) => {

  const sizes = [ 39, 40, 41, 42, 43, 44 ];
  const colors = [ 'RED', 'GREEN', 'BLUE', 'PURPLE' ];

  return (
    <div className='parameters-container'>
      <h3 className="parameters-name parameters-container__parameters-name">Filter</h3>
      <h3 className="parameter-name">Size</h3>
      {
        sizes.map((el) => <Size number={el} />)
      }
      <h3 className="parameter-name">Color</h3>
      {
        colors.map((el) => <Color name={el} />)
      }
      <button onClick={
        filterAction
      } className="filter-button">
        <p className="filter-text">filter</p>
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  filterAction,
}

export default connect( null, mapDispatchToProps )(Parameters);