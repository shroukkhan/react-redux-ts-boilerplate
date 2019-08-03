import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import reducers from "../redux";
import rootSaga from "../saga";

let store: any;
/* ------------- Redux Configuration ------------- */

const middleware: any[] = [];
const enhancers: any[] = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(logger);
middleware.push(thunk);
middleware.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));

/* ------------- AutoRehydrate Enhancer ------------- */

store = createStore(
  combineReducers({
    ...reducers,
  }),
  compose(...enhancers),
);

sagaMiddleware.run(rootSaga);

export default store;
