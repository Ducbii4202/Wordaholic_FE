// Layout.js
import { Outlet } from "react-router-dom";
import HeaderPage from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <HeaderPage /> {/* HeaderPage sử dụng useNavigate() */}
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet /> {/* Đây là nơi sẽ render các route con */}
        </div>
      </div>
    </div>
  );
};

export default App;
