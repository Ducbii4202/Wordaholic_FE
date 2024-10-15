import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccessMessage(
      "If the email is registered, a password reset link will be sent."
    );

    // Simulate sending the email
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/login");
    }, 3000); // Redirect to login after 3 seconds
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 overflow-hidden bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">
          Forgot Password?
        </h2>
        <p className="mt-4 text-gray-600">
          Please enter your registered email address to receive a password reset
          link.
        </p>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {successMessage && (
          <p className="mt-4 text-green-500">{successMessage}</p>
        )}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <button
            className="text-sm text-blue-500 hover:underline"
            onClick={() => navigate("/login")}
          >
            Back to Sign In
          </button>
          <button
            className="text-sm text-blue-500 hover:underline"
            onClick={() => navigate("/register")}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
