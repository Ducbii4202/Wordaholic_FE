// ShopPage.jsx
// import React from "react";
import { FaArrowLeft, FaStar, FaBolt, FaCoins } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 to-green-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="text-2xl text-gray-700">
          <FaArrowLeft onClick={() => navigate("/")} />
        </button>
        <h1 className="text-3xl font-bold text-green-800">Shop</h1>
        <div></div>
      </div>

      {/* User Info */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">LukiHo</h2>
            <p className="text-sm text-yellow-600">Premium</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-700">
            <FaCoins className="text-yellow-500" />
            <span>50</span>
          </div>
        </div>
      </div>

      {/* Shop Categories */}
      <div className="mt-6 space-y-8">
        {/* Tools & Stamina Section */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Tool & Stamina
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <FaStar className="mb-2 text-5xl text-yellow-500" />
              <p className="text-lg text-gray-800">x1 Tool</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <FaBolt className="mb-2 text-5xl text-yellow-500" />
              <p className="text-lg text-gray-800">x50 Stamina</p>
            </div>
          </div>
        </div>

        {/* Coin Section */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-800">Coin</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { coins: 50, price: "24.000₫" },
              { coins: 110, price: "50.000₫" },
              { coins: 250, price: "99.000₫" },
              { coins: 600, price: "199.000₫" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              >
                <FaCoins className="mb-2 text-5xl text-yellow-500" />
                <p className="text-lg font-semibold text-gray-800">
                  {item.coins} coin
                </p>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
