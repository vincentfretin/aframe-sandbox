import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContainer } from "react-hot-loader";

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default; // eslint-disable-line
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
