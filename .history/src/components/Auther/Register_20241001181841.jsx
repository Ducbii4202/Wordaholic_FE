import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Logic gửi email reset password đến API
    toast.success("An email has been sent to reset your password.");
    navigate("/login"); // Quay lại trang đăng nhập sau khi xử lý
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center">Forgot Password</h1>
        <p className="mb-8 text-center text-gray-600">
          Enter your email to reset your password
        </p>

        <div className="flex flex-col space-y-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleForgotPassword}
          >
            Reset Password
          </button>
          <button
            className="w-full px-4 py-2 mt-4 text-blue-500 transition duration-300 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
