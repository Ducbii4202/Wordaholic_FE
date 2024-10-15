import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import MainApp from "./App"; // Sử dụng MainApp cho file App.js của bạn thay vì App
import HomePage from "./components/Home/HomePage";
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Admin/Content/Dashboard";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import "antd/dist/reset.css";

const Layout = () => {
  const NotFound = () => {
    return (
      <div className="container mt-3 alert alert-danger">
        404. Not found data with current URL
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admins" element={<Admin />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
