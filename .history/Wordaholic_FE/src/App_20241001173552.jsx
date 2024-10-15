import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import HeaderPage from "./components/Header/Header";

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
