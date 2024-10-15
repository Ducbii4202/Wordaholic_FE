import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/reset.css"; // Import reset CSS cho antd v5
import "./index.css"; // Import CSS tùy chỉnh (nếu có)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
