// main.jsx hoặc index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import "antd/dist/reset.css"; // Import CSS của Ant Design (nếu dùng)
import Layout from "./layout";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    {/* Bao bọc toàn bộ ứng dụng */}
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
