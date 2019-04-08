/**
 * @Author: lovewcc
 * @Date:   2019-04-09T00:00:23+08:00
 * @Last modified by:   lovewcc
 * @Last modified time: 2019-04-09T00:28:13+08:00
 */

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
//
// ReactDOM.render(<App />, document.getElementById("root"));
//
import { createElement, render } from "./element.js";

let vertualDom = createElement("ul", { class: "list" }, [
  createElement("li", { class: "item" }, ["a"]),
  createElement("li", { class: "item" }, ["b"]),
  createElement("li", { class: "item" }, ["c"])
]);

const el = render(vertualDom);

console.log(vertualDom);
