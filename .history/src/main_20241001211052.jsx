import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "antd/dist/antd.css"; // Import CSS của antd

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
