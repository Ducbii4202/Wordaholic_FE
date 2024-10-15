import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "antd";
import HomePage from "./components/Home/HomePage";
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Admin/Content/Dashboard";

const Layout = (props) => {
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
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/users" element={<ListQuiz />} /> */}
        </Route>
        {/* <Route path="/quiz/:id" element={<DetailQuiz />} /> */}

        <Route path="admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUser />} />
          <Route path="manage-quizzes" element={<ManageQuiz />} />
          <Route path="manage-questions" element={<Questions />} />
          {/* <Route path="manage-users" element={<ManageUser />} /> */}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
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
