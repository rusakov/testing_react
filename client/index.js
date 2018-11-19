import React from "react";
import { hydrate } from "react-dom";
import App from "../views";
import { BrowserRouter } from "react-router-dom";

let app = document.getElementById("app");

hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
  </BrowserRouter>,
  app
);
