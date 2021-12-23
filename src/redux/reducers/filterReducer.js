import {CHANGE_SIZE_CHECKBOX, CHANGE_COLOR_CHECKBOX, FILTER_ACTION} from "../types";

const initialState = {
  size: {
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
  },
  color: {
    "RED": false,
    "BLUE": false,
    "GREEN": false,
    "PURPLE": false,
  },
  filtering: [[],[]],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIZE_CHECKBOX:
      return {...state, size: {...state.size, ...action.payload}};
    case CHANGE_COLOR_CHECKBOX:
      return {...state, color: {...state.color, ...action.payload}};
    case FILTER_ACTION:
      return {
        ...state, filtering:
        [
          Object.entries(state.size).map(([k, v]) => {
            return v ? k : null;
          }).filter((e) => e != null),
          Object.entries(state.color).map(([k, v]) => {
            return v ? k : null;
          }).filter((e) => e != null),
        ]
      }
    default:
      return state;
  }
};