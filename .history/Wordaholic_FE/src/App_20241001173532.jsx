import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";

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
