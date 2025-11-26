import React from "react";

function ProductCard({ product }) {
  if (!product) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded">
        ⚠️ No product data
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="h-32 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
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
