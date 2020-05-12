import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import reducer from "./reducers/reducer";

const logger = createLogger();
const enhancer = applyMiddleware(promiseMiddleware, logger);

const store = createStore(reducer, enhancer);

export default store;
