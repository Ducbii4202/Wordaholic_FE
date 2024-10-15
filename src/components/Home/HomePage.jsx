// import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaStore, // Changed the icon to FaStore for shop representation
  FaSignInAlt,
  FaWallet,
  FaCogs,
} from "react-icons/fa"; // Import icons from react-icons

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        {/* Header Section */}
        <div className="w-full max-w-5xl p-6 mt-10 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            {/* App Name and Logo */}
            <h1 className="text-3xl font-bold text-gray-700">WORDAHOLIC</h1>

            {/* User Options: Login and Register */}
            <div className="flex items-center space-x-4">
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
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="w-full max-w-5xl p-4 mt-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Main Navigation
          </h2>
          <div className="flex items-center justify-around text-gray-600">
            {/* Navigation Buttons with Icons */}
            <button
              className="flex flex-col items-center text-gray-600 transition duration-200 hover:text-green-600"
              onClick={() => navigate("/home")}
            >
              <FaHome className="mb-1 text-3xl" />
              <span className="text-sm">Home</span>
            </button>
            <button
              className="flex flex-col items-center text-gray-600 transition duration-200 hover:text-green-600"
              onClick={() => navigate("/shop")}
            >
              <FaStore className="mb-1 text-3xl" />
              <span className="text-sm">Shop</span>
            </button>
            <button
              className="flex flex-col items-center text-gray-600 transition duration-200 hover:text-green-600"
              onClick={() => navigate("/top-up")}
            >
              <FaWallet className="mb-1 text-3xl" />
              <span className="text-sm">Nạp Tiền</span>
            </button>
            <button
              className="flex flex-col items-center text-gray-600 transition duration-200 hover:text-green-600"
              onClick={() => navigate("/settings")}
            >
              <FaCogs className="mb-1 text-3xl" />
              <span className="text-sm">Settings</span>
            </button>
            <button
              className="flex flex-col items-center text-gray-600 transition duration-200 hover:text-red-600"
              onClick={() => {
                alert("You have logged out successfully.");
                navigate("/login");
              }}
            >
              <FaSignInAlt className="mb-1 text-3xl" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-5xl p-6 mt-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            Welcome to the Dashboard
          </h2>
          <p className="mt-2 text-gray-600">
            This is your main dashboard. Use the navigation bar above to switch
            between different sections.
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex-shrink-0 w-full max-w-5xl p-4 mt-10 text-center bg-white rounded-lg shadow-md">
          <p className="text-gray-600">
            Welcome ©{new Date().getFullYear()} WORDAHOLIC. All rights reserved.
          </p>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
