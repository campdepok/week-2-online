import { combineReducers } from "redux";
import consumeAPI from "./consumeAPI";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
  consumeAPI,
});

export default rootReducer;
