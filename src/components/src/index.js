import React from "react";
import ReactDOM from "react-dom";

import PageAssembly from "./components/PageAssembly.js"


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <PageAssembly />
  </React.StrictMode>,
  rootElement
);