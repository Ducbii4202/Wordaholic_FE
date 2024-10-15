// src/components/GamePage.jsx
import { useState } from "react";
import {
  FaUserFriends,
  FaRobot,
  FaDoorOpen,
  FaArrowLeft,
} from "react-icons/fa";

const GamePage = () => {
  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = () => {
    const newRoomCode = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    setRoomCode(newRoomCode);
    alert(`Room created! Your room code is: ${newRoomCode}`);
  };

  return (
    <div className="min-h-screen p-6 bg-blue-100">
      <div className="flex items-center justify-between mb-6">
        <button className="text-xl">
          <FaArrowLeft className="text-gray-600" />
        </button>
        <h1 className="text-3xl font-bold">Game Room</h1>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FaUserFriends className="text-3xl text-blue-500" />
            <h2 className="text-xl font-semibold">Player vs Player</h2>
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Join Room
          </button>
        </div>

        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FaRobot className="text-3xl text-green-500" />
            <h2 className="text-xl font-semibold">Player vs Bot</h2>
          </div>
          <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
            Start Game
          </button>
        </div>

        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FaDoorOpen className="text-3xl text-yellow-500" />
            <h2 className="text-xl font-semibold">Create Room</h2>
          </div>
          <button
            onClick={handleCreateRoom}
            className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Create
          </button>
        </div>
      </div>

      {roomCode && (
        <div className="p-4 mt-6 text-center bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Room Code:</h2>
          <p className="text-2xl font-bold text-blue-500">{roomCode}</p>
        </div>
      )}
    </div>
  );
};

export default GamePage;
