import React from "react";
import "./Color.css";
import { connect } from "react-redux";
import { changeColorCheckbox } from "../../../../../../redux/actions"

const Color = ({ name, changeColorCheckbox }) => {

  let color = false;

  return (
    <div className="color-container">
      <div className="color-checkbox">
        <input value={color} onChange={() => {
          color = !color;
          changeColorCheckbox({
            [name]: color,
          });
        }} className="color-input" type="checkbox" id={ name } name="sizes" />
        <label className="color-label" htmlFor={ name } >{ name }</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeColorCheckbox,
}

export default connect(null, mapDispatchToProps)(Color);