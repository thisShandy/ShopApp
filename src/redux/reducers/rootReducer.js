import { combineReducers } from "redux";
import { goodsReducer } from "./goodsReducer";
import { userReducer } from "./userReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  goods: goodsReducer,
  user: userReducer,
  filter: filterReducer,
});