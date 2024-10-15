import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import HeaderPage from "./components/Header/Header";
import ForgotPassword from "./components/Auther/ForgotPassword";
import { Header } from "antd/es/layout/layout";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
