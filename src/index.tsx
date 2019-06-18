import "bootstrap-loader";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import "reactstrap";
import "bootstrap/scss/bootstrap.scss";
import { store, history } from "./store";
import { App } from "./app";


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
