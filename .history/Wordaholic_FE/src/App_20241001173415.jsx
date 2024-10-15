import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage"; // Đường dẫn tới component HeaderPage
import Login from "./components/Login"; // Đường dẫn tới component Login
import Register from "./components/Register"; // Đường dẫn tới component Register

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
