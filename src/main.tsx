import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"


const e = React.createElement;

const domContainer = document.getElementById("app")!;
const root = ReactDOM.createRoot(domContainer);

root.render(e(App));
