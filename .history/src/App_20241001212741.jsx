import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import HeaderPage from "./components/Header/Header";
import ForgotPassword from "./components/Auther/ForgotPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
