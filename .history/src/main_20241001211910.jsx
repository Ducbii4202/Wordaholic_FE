// main.jsx hoặc index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Layout from "./Layout"; // Import component chính của bạn
import "antd/dist/reset.css"; // Import CSS của Ant Design (nếu dùng)

ReactDOM.render(
  <BrowserRouter>
    {" "}
    {/* Bao bọc toàn bộ ứng dụng */}
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
