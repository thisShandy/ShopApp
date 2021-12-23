import sneaker_1 from "../../Images/sneaker_1.jpg";
import sneaker_2 from "../../Images/sneaker_2.jpg";
import sneaker_3 from "../../Images/sneaker_3.jpg";
import sneaker_4 from "../../Images/sneaker_4.jpg";
import { SET_CURRENT_GOOD } from "../types";

const initialState = {
  list: [{
    key: 123444,
    name: "NIKE BOOST",
    price: 199.99,
    img: sneaker_1,
    color: ['RED'],
    size: [40, 41, 44]
  },
    {
      key: 876904,
      name: "NIKE BOOST",
      price: 189.99,
      img: sneaker_2,
      color: ['BLUE'],
      size: [39, 43, 44]
    },
    {
      key: 393465,
      name: "NIKE BOOST",
      price: 179.99,
      img: sneaker_3,
      color: ['PURPLE'],
      size: [40, 41, 44]
    },
    {
      key: 434563,
      name: "NIKE BOOST",
      price: 189.99,
      img: sneaker_4,
      color: ['GREEN'],
      size: [39, 40, 42, 43]
    }],
  current: {},
}


export const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GOOD:
      return { ...state, current: action.payload };
    default:
      return state;
  };
};