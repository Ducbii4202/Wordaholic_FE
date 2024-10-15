import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ImSpinner9 } from "react-icons/im";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Validate email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    // Validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }

    setIsLoading(true);
    // Submit API
    // Thực hiện gọi API đăng nhập (tạm thời bỏ qua)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-sm text-gray-600"
            onClick={() => navigate("/register")}
          >
            Do not have an account yet?
          </span>
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-20 h-20 rounded-full shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-center">Wordaholic</h1>
        <p className="mb-8 text-center text-gray-600">Hello, Who this?</p>

        {/* Content Form */}
        <div className="space-y-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="relative flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute text-gray-500 cursor-pointer right-3 top-9"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>

          {/* Forgot Password */}
          <span
            className="text-sm text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/forgot-password")} // Điều hướng đến trang Forgot Password
          >
            Forgot Password?
          </span>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading && (
                <ImSpinner9 className="w-5 h-5 mr-2 animate-spin" />
              )}
              <span>Login</span>
            </button>
          </div>

          {/* Back to Home */}
          <div className="mt-4 text-center">
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              &#60;&#60; Go to HomePage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
