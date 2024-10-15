// import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/User/UserPage";
import ForgotPassword from "./components/Auther/ForgotPassword";
import Register from "./components/Auther/Register";
import Login from "./components/Auther/Login";
import ShopPage from "./components/Home/ShopPage";
import EditProfile from "./components/User/Setting/EditProfile";
import Settings from "./components/User/Setting/Settings";
import TopUp from "./components/User/TopUp";
import Player from "./components/User/Play/Player";
import HomePage from "./components/Home/HomePage";
import Home from "./components/Home/Home";
import GamePage from "./components/Game/GamePage";

const App = () => {
  const NotFound = () => (
    <div className="container px-4 py-3 mx-auto my-4 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
      404. Not found data with current URL
    </div>
  );

  return (
    <Routes>
      {/* Parent Route for Layout */}
      <Route path="/" element={<HomePage />}>
        <Route path="app" element={<App />} />

        {/* UserPage Route with Nested Routes */}
        <Route path="user" element={<UserPage />}>
          <Route path="player" element={<Player />} />
        </Route>
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/game-page" element={<GamePage />} />
      <Route path="/top-up" element={<TopUp />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
