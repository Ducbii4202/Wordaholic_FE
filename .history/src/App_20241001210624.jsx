import { Outlet } from "react-router-dom";
import HeaderPage from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <HeaderPage />
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
