import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./store/Store";
// if you need copy /src/ folder to Create React App - uncomment this
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// if you need copy /src/ folder to Create React App - uncomment this
// registerServiceWorker();
