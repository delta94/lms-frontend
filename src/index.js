import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<RootApp />, document.getElementById("root"));
