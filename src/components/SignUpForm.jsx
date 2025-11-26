import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Google & Facebook Icons

export default function SignUpPhone({ onClose }) {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending code to: ${phone}`);
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
        {/* Close button top right */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-7">Sign up</h2>

        {/* Phone Input Row */}
        <div className="flex items-center border rounded-xl overflow-hidden mb-4">
          <span className="px-4 py-3 border-r bg-gray-50 text-gray-700 text-sm font-medium">
            PK+92
          </span>

          <input
            type="tel" // Using tel input type for phone numbers
            pattern="[0-9]{10}" // Pattern for validating phone number
            className="w-full px-4 py-3 text-sm focus:outline-none"
            placeholder="Please enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Checkbox + Terms */}
        <div className="flex gap-2 mb-3">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="h-4 w-4 accent-black"
          />
          <p className="text-sm text-gray-700 leading-tight">
            By creating and/or using your account, you agree to our{" "}
            <a className="text-black font-medium" href="#">
              Terms of Use
            </a>{" "}
            and{" "}
            <a className="text-black font-medium" href="#">
              Privacy Policy
            </a>.
          </p>
        </div>

        {/* Main Button (Black version) */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-xl bg-black text-white text-[15px] font-semibold flex items-center justify-center gap-2 mt-2"
        >
          <FaWhatsapp className="w-5 h-5" />
          Send code via Whatsapp
        </button>

        {/* Already have an account */}
        <p className="text-center mt-4 text-gray-700 text-[15px]">
          Already have an account?{" "}
          <a href="#" className="text-black font-semibold">
            Log in Now
          </a>
        </p>

        {/* Divider */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          Or, sign up with
        </div>

        {/* Social login */}
        <div className="flex justify-center gap-8 mt-4">
          <button className="flex items-center gap-2 text-xl text-gray-600 hover:text-black">
            <FaGoogle className="text-blue-500" /> Google
          </button>

          <button className="flex items-center gap-2 text-xl text-gray-600 hover:text-black">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
