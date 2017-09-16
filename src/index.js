import "react-hot-loader/patch";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./AppAR";
import { AppContainer } from "react-hot-loader";

if (module.hot) {
  module.hot.accept("./AppAR", () => {
    const NewApp = require("./AppAR").default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.querySelector("#sceneContainer")
    );
  });
}
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector("#sceneContainer")
);
