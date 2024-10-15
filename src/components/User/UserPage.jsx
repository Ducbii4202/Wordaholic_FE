// src/components/User/UserPage.js
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaUserEdit, FaPlayCircle, FaCogs } from "react-icons/fa"; // Import FaPlayCircle for Player icon

const UserPage = () => {
  const navigate = useNavigate();

  // State to simulate whether a user is logged in or not
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({
    username: "LukiHo", // Replace with your actual user data
    avatar: "https://via.placeholder.com/40", // Replace with the user's avatar URL
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header Section */}
      <div className="w-full max-w-5xl p-6 mt-10 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-green-600">Wordaholic</h1>
          <div className="flex items-center space-x-4">
            {loggedIn ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-12 h-12 border-2 border-green-500 rounded-full shadow-md"
                />
                <div className="text-lg">
                  <span className="font-semibold text-gray-800">
                    {user.username}
                  </span>
                  <button
                    className="px-4 py-2 ml-4 text-white transition duration-200 bg-red-500 rounded-lg shadow-md hover:bg-red-600"
                    onClick={() => {
                      setLoggedIn(false);
                      setUser({ username: "", avatar: "" });
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button
                  className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-lg shadow hover:bg-blue-600"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 text-blue-500 transition duration-200 border border-blue-500 rounded-lg shadow hover:bg-blue-500 hover:text-white"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="w-full max-w-5xl p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-green-600">
          User Functions
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Settings Button */}
          <button
            className="flex flex-col items-center p-6 transition duration-200 transform rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:-translate-y-1"
            onClick={() => navigate("user/settings")}
          >
            <FaCogs className="mb-2 text-5xl text-green-500" />
            <span className="text-lg font-medium text-gray-700">Setting</span>
          </button>

          {/* Player Button */}
          <button
            className="flex flex-col items-center p-6 transition duration-200 transform rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:-translate-y-1"
            onClick={() => navigate("user/player")} // Thay đổi điều hướng đến trang Player
          >
            <FaPlayCircle className="mb-2 text-5xl text-yellow-500" />{" "}
            {/* Đổi biểu tượng */}
            <span className="text-lg font-medium text-gray-700">
              Player
            </span>{" "}
            {/* Đổi tên thành Player */}
          </button>

          {/* Edit Profile Button */}
          <button
            className="flex flex-col items-center p-6 transition duration-200 transform rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:-translate-y-1"
            onClick={() => navigate("user/edit-profile")}
          >
            <FaUserEdit className="mb-2 text-5xl text-purple-500" />
            <span className="text-lg font-medium text-gray-700">
              Edit Profile
            </span>
          </button>
        </div>
      </div>

      {/* Nested Route Content Section */}
      <div className="w-full max-w-5xl p-8 mt-6 bg-white rounded-lg shadow-lg">
        <Outlet /> {/* This will render the nested routes' components */}
      </div>

      {/* Footer Section */}
      <div className="flex-shrink-0 w-full max-w-5xl p-4 mt-10 text-center bg-white rounded-lg shadow-md">
        <p className="text-gray-600">
          Welcome ©{new Date().getFullYear()} WORDAHOLIC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default UserPage;
