import {ADD_SIZE, ADD_TO_CART, BUY_NOW, REMOVE_FROM_CART, OPEN_MODAL, SET_TOTAL} from "../types";

const initialState = {
  name: "User",
  id: 35415423,
  cart: [],
  sizes: [],
  buy: {},
  modal: false,
  total: 0,
};

export const userReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [ ...state.cart, action.payload ]};
    case ADD_SIZE:
      return { ...state, sizes: [ ...action.payload ] };
    case REMOVE_FROM_CART:
      return { ...state, cart: [ ...state.cart.filter((el) => el.id !== action.payload) ] };
    case BUY_NOW:
      return { ...state, buy: { ...action.payload } };
    case OPEN_MODAL:
      return { ...state, modal: !state.modal };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    default:
      return state;
  };
};