import {BUY_NOW, OPEN_MODAL, REMOVE_FROM_CART, SET_TOTAL} from "./types";
import { CHANGE_COLOR_CHECKBOX } from "./types";
import { FILTER_ACTION } from "./types";
import { SET_CURRENT_GOOD } from "./types";
import { ADD_TO_CART } from "./types";
import { ADD_SIZE } from "./types";
import { CHANGE_SIZE_CHECKBOX } from "./types";

export const changeSizeCheckbox = payload => {
  return {
    type: CHANGE_SIZE_CHECKBOX,
    payload,
  };
};

export const changeColorCheckbox = payload => {
  return {
    type: CHANGE_COLOR_CHECKBOX,
    payload,
  };
};

export const filterAction = () => {
  return {
    type: FILTER_ACTION,
  };
};

export const setCurrentGood = payload => {
  return {
    type: SET_CURRENT_GOOD,
    payload,
  };
};

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const addSize = payload => {
  return {
    type: ADD_SIZE,
    payload,
  };
};

export const removeFromCart = payload => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const buyNow = payload => {
  return {
    type: BUY_NOW,
    payload,
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const setTotal = payload => {
  return {
    type: SET_TOTAL,
    payload,
  };
};