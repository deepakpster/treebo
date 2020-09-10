import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { store, history } from "./store";
import "../scss/main.scss";
import App from "./containers/App";
import Second from "./components/Second";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/second" component={Second} />
        <Route path="/" component={App} />
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
