import React from "react";
import "./Shop.css";
import Item from "./Item/Item";
import {connect} from "react-redux";

const Shop = ({ goods, goodsFilter }) => {

  const [ sizes, colors ] = goodsFilter;

    return (
      <div className="shop-container">
        {
          sizes.length !== 0 && colors.length !== 0 ?
          goods.filter(el => el.size.some(e => sizes.includes(e.toString()))).filter(el => el.color.some(e => colors.includes(e.toString()))).map((el) => <Item key={el.key} props={el}/>)
          :
          sizes.length !== 0 ?
          goods.filter(el => el.size.some(e => sizes.includes(e.toString()))).map((el) => <Item key={el.key} props={el}/>)
          :
          colors.length !== 0 ?
          goods.filter(el => el.color.some(e => colors.includes(e.toString()))).map((el) => <Item key={el.key} props={el}/>)
          :
          goods.map((el) => <Item key={el.key} props={el}/>)
        }
      </div>
    );
}

const mapStateToProps = state => {
  return {
    goods: state.goods.list,
    goodsFilter: state.filter.filtering,
  }
};

export default connect(mapStateToProps, null)(Shop);