import { combineReducers, CombinedState } from "redux";
import UIState from "./UIState";
import AppState from "./AppState";
import { Reducer } from "react";

const appReducer = combineReducers({
  UIState,
  AppState,
});

const rootReducer: Reducer<CombinedState<any>, any> = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
