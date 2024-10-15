import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Function to validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to validate password
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    // Proceed with login logic here
    alert("Login Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Sign In Section */}
        <div className="w-1/2 p-8">
          <h2
            className="text-2xl font-semibold text-gray-700 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Sign in
          </h2>
          <div className="flex justify-start my-5 space-x-3">
            {/* Facebook Button */}
            <button className="p-2 border border-gray-300 rounded-full">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl text-blue-500"
              />
            </button>
            {/* Google Button */}
            <button className="p-2 border border-gray-300 rounded-full">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-xl text-red-500"
              />
            </button>
            {/* LinkedIn Button */}
            <button className="p-2 border border-gray-300 rounded-full">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl text-blue-700"
              />
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Show/Hide Password Toggle Icon */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-gray-500"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-sm text-blue-500"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot your password?
              </a>
              <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Sign In
              </button>
            </div>
          </form>
        </div>
        {/* Sign Up Section */}
        <div className="flex items-center justify-center w-1/2 p-8 text-white bg-gradient-to-r from-pink-500 to-red-500">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-semibold">Hello, Friend!</h2>
            <p className="mb-8">
              Enter your personal details and start your journey with us.
            </p>
            <button
              className="px-4 py-2 text-pink-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
