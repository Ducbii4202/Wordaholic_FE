import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Hàm validate email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // Xử lý gửi liên kết đặt lại mật khẩu
  const handleSubmit = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    setIsSubmitting(true);
    //     const result = await sendResetPasswordLink(email); // Gửi yêu cầu API
    //     if (result && result.success) {
    //       toast.success("Reset link sent! Please check your email.");
    //       setEmail("");
    //       navigate("/login");
    //     } else {
    //       toast.error("Failed to send reset link. Please try again.");
    //     }
    //     setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-center">Forgot Password</h1>
        <p className="mb-8 text-center text-gray-600">
          Enter your email to receive a password reset link
        </p>

        {/* Email Field */}
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Reset Link"}
          </button>
        </div>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            &#60;&#60; Back to Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
