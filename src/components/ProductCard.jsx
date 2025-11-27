import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer h-full">
        {/* FIXED IMAGE HEIGHT */}
        <div className="h-44 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-32 object-contain" // image ka height fix karo
          />
        </div>

        <h3 className="mt-2 text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-red-500 font-bold mt-2">
          ${product.price?.toFixed(2) ?? "N/A"}
        </p>

        <div className="mt-auto text-xs text-gray-500">
          ⭐ {product.rating?.rate ?? "-"} ({product.rating?.count ?? "-"})
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
