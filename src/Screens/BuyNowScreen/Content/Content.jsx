import React from "react";
import "./Content.css";
import { connect } from "react-redux";
import Item from "./Components/Item/Item";

const Content = ({ buy }) => {
  return (
    <div className="buy-now-content">
      <Item key={buy.key} props={buy} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    buy: state.user.buy,
  };
};

export default connect(mapStateToProps, null)(Content);