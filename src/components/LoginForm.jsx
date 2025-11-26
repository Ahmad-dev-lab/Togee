import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For the eye toggle
import { FaGoogle, FaFacebook } from "react-icons/fa"; // For Google and Facebook icons
import { FaWhatsapp } from "react-icons/fa"; // For WhatsApp icon

export default function LoginForm({ onClose }) {
  const [tab, setTab] = useState("password");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login: ${emailOrPhone}\nPassword: ${password}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl w-[380px] p-6 shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-6">
          <button
            onClick={() => setTab("password")}
            className={`flex-1 py-2 text-center font-medium ${
              tab === "password"
                ? "border-b-4 border-black text-black"
                : "text-gray-500"
            }`}
          >
            Password
          </button>

          <button
            onClick={() => setTab("phone")}
            className={`flex-1 py-2 text-center font-medium ${
              tab === "phone"
                ? "border-b-4 border-black text-black"
                : "text-gray-500"
            }`}
          >
            Phone Number
          </button>
        </div>

        {/* Password Tab Form */}
        {tab === "password" && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Please enter your Phone or Email"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              className="w-full px-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 "
            />

            {/* Password Field With Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2  pr-10"
              />

              {/* Eye Icon Button with Color Change */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black text-lg"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-black" /> // Orange Color
                ) : (
                  <FaEye className="text-black" /> // Green Color
                )}
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-black transition"
            >
              LOGIN
            </button>
          </form>
        )}

        {/* Sign Up Link */}
        <div className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-black font-semibold">
            Sign up
          </a>
        </div>

        {/* Social Login */}
        <div className="text-center mt-6 text-gray-600">Or, login with</div>

        <div className="flex justify-center gap-8 mt-4">
          <button className="flex items-center gap-2 text-xl text-gray-600 hover:text-black">
            <FaGoogle className="text-blue-500" /> {/* Google Icon in Blue */}
            Google
          </button>

          <button className="flex items-center gap-2 text-xl text-gray-600 hover:text-black">
            <FaFacebook className="text-blue-600" /> {/* Facebook Icon in Blue */}
            Facebook
          </button>

         
        </div>
      </div>
    </div>
  );
}
