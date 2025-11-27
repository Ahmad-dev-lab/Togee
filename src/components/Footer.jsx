import React from 'react';



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">TOGEE</h1>
          <p className="text-gray-400">Quality products at affordable prices</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-white mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-white mb-2">Contact</h2>
          <p>Email: <a href="mailto:hello@togee.com" className="hover:text-white">hello@togee.com</a></p>
          <p>Phone: +92 300 1234567</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-8 text-sm">
        © 2025 TOGEE. All rights reserved.
      </p>
    </footer>
  );
}



export default Footer; // ✅ Make sure this line is here
