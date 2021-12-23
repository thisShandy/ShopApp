import React, { useState } from "react";
import "./Size.css";
import { connect } from "react-redux";
import { changeSizeCheckbox } from "../../../../../../redux/actions";

const Size = ({ number, changeSizeCheckbox }) => {

  let size = false;

  return (
    <div className="size-container">
      <div className="size-checkbox">
        <input
          value={size}
          onChange={() => {
            size = !size;
            changeSizeCheckbox({
              [number]: size,
            });
          }}
          className="size-input"
          type="checkbox"
          id={number.toString()}
          name={number.toString()}
        />
        <label className="size-label" htmlFor={number.toString()} >{ number }</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeSizeCheckbox,
}

export default connect( null, mapDispatchToProps )(Size);