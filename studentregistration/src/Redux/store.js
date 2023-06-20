import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { commonReducer } from "./CommonReducer";
const logger = createLogger();

const store = createStore(commonReducer, applyMiddleware(thunk, logger));

export default store;

