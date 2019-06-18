import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { userReducer, productCategoryReducer, productReducer } from "@reducers";

import thunk from "redux-thunk";

export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    productCategories: productCategoryReducer,
    products: productReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerMiddleware(history), thunk)
);
