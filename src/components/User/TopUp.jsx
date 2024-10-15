import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaWallet } from "react-icons/fa"; // Import an icon for the top-up page

const TopUp = () => {
  const navigate = useNavigate();

  // State to hold the top-up amount and payment method
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // Handler for form submission
  const handleTopUp = () => {
    // In a real application, you would send the top-up request to the backend here
    alert(`Top up successful! Amount: ${amount} VND using ${paymentMethod}`);
    // Redirect to the home or user dashboard after successful top-up
    navigate("/user");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-green-100 to-blue-100">
      <button className="text-2xl text-gray-700">
        <FaArrowLeft onClick={() => navigate("/")} />
      </button>
      <div className="w-full max-w-lg p-6 mt-10 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-600">Nạp Tiền</h1>
          <FaWallet className="text-4xl text-yellow-500" />
        </div>
        <p className="text-gray-600">
          Nạp tiền vào tài khoản của bạn để tận hưởng các dịch vụ và ưu đãi từ
          Wordaholic.
        </p>
      </div>

      {/* Top-Up Form */}
      <div className="w-full max-w-lg p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Thông tin nạp tiền
        </h2>

        {/* Input Field for Top-Up Amount */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Nhập số tiền muốn nạp (VND)
          </label>
          <input
            type="number"
            placeholder="Nhập số tiền..."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Chọn phương thức thanh toán
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="credit_card"
                name="payment_method"
                value="credit_card"
                checked={paymentMethod === "credit_card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <label htmlFor="credit_card" className="ml-2 text-gray-700">
                Thẻ tín dụng
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="bank_transfer"
                name="payment_method"
                value="bank_transfer"
                checked={paymentMethod === "bank_transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <label htmlFor="bank_transfer" className="ml-2 text-gray-700">
                Chuyển khoản ngân hàng
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="momo"
                name="payment_method"
                value="momo"
                checked={paymentMethod === "momo"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <label htmlFor="momo" className="ml-2 text-gray-700">
                Ví MoMo
              </label>
            </div>
          </div>
        </div>

        {/* Top-Up Button */}
        <button
          className="w-full px-4 py-2 text-white transition duration-200 bg-green-500 rounded-lg shadow-md hover:bg-green-600"
          onClick={handleTopUp}
        >
          Nạp Tiền
        </button>
      </div>

      {/* Back Button */}
      <button
        className="px-4 py-2 mt-6 text-gray-600 transition duration-200 bg-gray-200 rounded-lg shadow hover:bg-gray-300"
        onClick={() => navigate("/user")}
      >
        Quay lại Trang Chính
      </button>
    </div>
  );
};

export default TopUp;
