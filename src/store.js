import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  counter: 0
};

// Initiate a new logger instance
const logger = createLogger();

// Build the list of middleware
const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

// createStore() takes a reducer, preloaded state, and enhancers
// http://redux.js.org/docs/api/createStore.html#createstorereducer-preloadedstate-enhancer
const store = createStore(rootReducer, initialState, enhancer);

// Export the store
export default store;
