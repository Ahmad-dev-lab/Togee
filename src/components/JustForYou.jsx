import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function JustForYou() {
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

  if (loading) {
    return <div className="text-center py-10">Loading Just for You...</div>;
  }

  return (
    <section className="mt-10 max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Just for You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default JustForYou;
