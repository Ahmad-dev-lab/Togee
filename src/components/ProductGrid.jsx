import React from "react";

function ProductCard({ product }) {
  // 🔹 Skip undefined/null products silently
  if (!product) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col">

      {/* 🔧 IMAGE SECTION — same height for all cards */}
      <div className="h-44 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="mt-2 text-sm font-medium text-gray-800 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-red-500 font-bold mt-2">
        ${product.price ? product.price.toFixed(2) : "N/A"}
      </p>

      <div className="mt-auto text-xs text-gray-500">
        ⭐ {product.rating?.rate ?? "-"} ({product.rating?.count ?? "-"})
      </div>
    </div>
  );
}

export default ProductCard;
