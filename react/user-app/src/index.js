import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// v17
// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );