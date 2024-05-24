import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const nice = "variable";

const element = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google",
  nice // as we can see the variables injected in jsx comes in as object properties which is why they cant be regular js and needs to evaluated expressions
); // this is what exactly jsx gets converted into and we can use it like shown further below, but there are many algoirithms applied for performance and other stuff

// ReactDOM.createRoot(document.getElementById("root")).render(element);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
