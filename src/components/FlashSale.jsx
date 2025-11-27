import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function FlashSale() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  // 👉 FIX 1 — Loading visible rakha
  if (loading) {
    return <div className="text-center py-10">Loading Flash Sale...</div>;
  }

  // 👉 FIX 2 — Agar API empty array de to message
  if (products.length === 0) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Flash Sale</h2>
        <button className="text-sm text-black hover:underline">Shop All</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FlashSale;
