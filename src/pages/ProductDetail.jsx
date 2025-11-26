import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Section: Product Images */}
      <div className="lg:col-span-5">
        <div className="border rounded-md p-4 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain"
          />
        </div>
        <div className="flex space-x-2 mt-4 overflow-x-auto">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 border rounded flex-shrink-0 flex items-center justify-center cursor-pointer hover:border-orange-500"
            >
              <img
                src={product.image}
                alt="thumb"
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Center: Product Info */}
      <div className="lg:col-span-5">
        <h1 className="text-xl font-bold text-gray-800">{product.title}</h1>
        <div className="text-sm text-gray-500 mt-1">
          ⭐ {product.rating?.rate} | {product.rating?.count} Ratings
        </div>

        {/* Price Section */}
        <div className="mt-4">
          <span className="text-3xl font-bold text-red-500">${product.price}</span>
          <span className="ml-2 line-through text-gray-400 text-lg">
            ${(product.price * 1.5).toFixed(2)}
          </span>
          <span className="ml-2 text-green-600 font-semibold">-30%</span>
        </div>

        {/* Color Options (dummy) */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Color Family</h3>
          <div className="flex space-x-2">
            <div className="w-12 h-12 border rounded cursor-pointer bg-black"></div>
            <div className="w-12 h-12 border rounded cursor-pointer bg-gray-300"></div>
            <div className="w-12 h-12 border rounded cursor-pointer bg-red-500"></div>
          </div>
        </div>

        {/* Size Options (dummy) */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Size</h3>
          <div className="flex space-x-2">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                className="px-4 py-2 border rounded hover:border-orange-500"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6 flex items-center space-x-4">
          <h3 className="font-semibold text-gray-700">Quantity</h3>
          <div className="flex items-center border rounded">
            <button className="px-3 py-1">-</button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-l border-r"
              readOnly
            />
            <button className="px-3 py-1">+</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="flex-1 bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
            Buy Now
          </button>
          <button className="flex-1 bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-2 border rounded-md p-4 text-sm text-gray-700 space-y-4">
        <div>
          <h3 className="font-semibold">Delivery Options</h3>
          <p className="mt-1">Standard Delivery - $5</p>
          <p className="text-green-600">Cash on Delivery Available</p>
        </div>
        <div>
          <h3 className="font-semibold">Return & Warranty</h3>
          <p className="mt-1">14 days easy return</p>
          <p className="text-gray-500">Warranty not available</p>
        </div>
        <div>
          <h3 className="font-semibold">Sold by</h3>
          <p className="text-blue-500">Dummy Store</p>
          <p>Positive Ratings: 90%</p>
          <p>Ship on Time: 95%</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
