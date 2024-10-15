// src/components/HomePage.jsx
import {
  FaBell,
  FaStar,
  FaCrown,
  FaLightbulb,
  FaSearch,
  FaShoppingBag,
  FaUserFriends,
  FaGamepad,
  FaBook,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 bg-green-100">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">WORDAHOLIC</h1>
        <div className="relative">
          <FaBell className="text-xl text-gray-600" />
          <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-1 -right-2">
            12
          </span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center p-4 mb-6 bg-white rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 mr-4 rounded-full"
        />
        <div className="flex-grow">
          <h2 className="text-xl font-semibold">LukiHo</h2>
          <button className="text-sm text-blue-500">Unlock premium</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <span className="block text-lg font-semibold">5/120</span>
            <FaLightbulb className="text-xl text-yellow-500" />
          </div>
          <div className="text-center">
            <span className="block text-lg font-semibold">50</span>
            <FaCrown className="text-xl text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Topic"
          className="w-full p-4 rounded-lg shadow-md"
        />
        <FaSearch className="absolute text-xl text-gray-400 top-4 right-4" />
      </div>

      {/* Hot Topics Section */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Player</h2>
        <div className="space-y-4">
          {[
            { title: "Advanced Words", stars: 5.0, premium: true, price: 50 },
            {
              title: "Food and Animal",
              stars: 4.5,
              premium: false,
              price: 150,
            },
            { title: "Daily Basic", stars: 4.0, premium: false, price: 50 },
          ].map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <FaBook className="mr-4 text-2xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">{topic.title}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: Math.floor(topic.stars) }, (_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    {topic.stars % 1 !== 0 && (
                      <FaStar className="text-yellow-400 opacity-50" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {topic.premium && (
                  <span className="font-semibold text-yellow-500">Premium</span>
                )}
                <span className="font-bold text-gray-700">{topic.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-white shadow-md">
        <button className="text-center text-gray-600">
          <FaShoppingBag className="mx-auto text-2xl" />
          <span className="block text-sm">Shop</span>
        </button>
        <button className="text-center text-gray-600">
          <FaUserFriends className="mx-auto text-2xl" />
          <span className="block text-sm">Friends</span>
        </button>
        <button
          className="text-center text-gray-600"
          onClick={() => navigate("/game-page")}
        >
          <FaGamepad className="mx-auto text-2xl" />
          <span className="block text-sm">Game</span>
        </button>
        <button className="text-center text-gray-600">
          <FaBook className="mx-auto text-2xl" />
          <span className="block text-sm">Library</span>
        </button>
        <button className="text-center text-gray-600">
          <FaCog className="mx-auto text-2xl" />
          <span className="block text-sm">Setting</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
