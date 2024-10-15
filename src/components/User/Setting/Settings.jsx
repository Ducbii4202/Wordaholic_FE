import { useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  EditOutlined,
  DollarOutlined,
} from "@ant-design/icons"; // Import icons

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="w-full max-w-md p-4 mt-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Settings
        </h2>
      </div>

      {/* Settings Options */}
      <div className="w-full max-w-md p-4 mt-6 space-y-4 bg-white rounded-lg shadow-lg">
        {/* Option 1: Edit Profile */}
        <div
          className="flex items-center justify-between p-4 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          onClick={() => navigate("/user/edit-profile")}
        >
          <div className="flex items-center space-x-2">
            <EditOutlined className="text-xl text-blue-500" />
            <h3 className="text-lg font-medium text-gray-700">Edit Profile</h3>
          </div>
        </div>

        {/* Option 2: Nạp Tiền */}
        <div
          className="flex items-center justify-between p-4 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          onClick={() => navigate("/user/top-up")}
        >
          <div className="flex items-center space-x-2">
            <DollarOutlined className="text-xl text-green-500" />
            <h3 className="text-lg font-medium text-gray-700">Nạp Tiền</h3>
          </div>
        </div>

        {/* Option 3: Logout */}
        <div
          className="flex items-center justify-between p-4 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          onClick={() => {
            // Perform logout logic here
            alert("You have logged out successfully.");
            navigate("/login"); // Redirect to login page
          }}
        >
          <div className="flex items-center space-x-2">
            <LogoutOutlined className="text-xl text-red-500" />
            <h3 className="text-lg font-medium text-gray-700">Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
