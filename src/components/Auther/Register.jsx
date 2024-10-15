import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // Proceed with registration logic here
    alert("Registration Successful!");
    navigate("/login"); // Redirect to login page after registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Register Section */}
        <div className="flex items-center justify-center w-1/2 p-8 text-white bg-gradient-to-r from-pink-500 to-red-500">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-semibold">Welcome Back!</h2>
            <p className="mb-8">
              If you already have an account, please sign in to continue.
            </p>
            <button
              className="px-4 py-2 text-pink-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700">
            Create an Account
          </h2>
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
            <div>
              <label className="block text-gray-600">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Register
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
