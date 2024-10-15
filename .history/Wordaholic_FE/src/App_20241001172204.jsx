import "./App.css";
import HeaderPage from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <HeaderPage />
        </div>
        <div className="main-container"></div>
      </div>
    </>
  );
}

export default App;
