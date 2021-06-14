import React from "react";
import ReactDom from "react-dom";
import App from "./_jsapp/App";
import "./_scss/App.scss";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
