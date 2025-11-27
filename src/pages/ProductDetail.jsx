import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Not Specified");
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [questionInput, setQuestionInput] = useState(""); // User question
  const reviewsPerPage = 3;

  // Dummy reviews data
  const reviewsData = [
    { id: 1, rating: 5, title: "Great Material and Design", text: "Good quality and perfect size.", images: [], user: "Farah Hassan", date: "2 weeks ago" },
    { id: 2, rating: 4, title: "Comfortable and Stylish", text: "Very nice, would buy again.", images: ["https://via.placeholder.com/100"], user: "nadia22718", date: "1 week ago" },
    { id: 3, rating: 5, title: "Exactly as described", text: "Good design and quality.", images: ["https://via.placeholder.com/100"], user: "Asad ur Rehman", date: "Oct 16, 2025" },
    { id: 4, rating: 5, title: "Soft material, neat embroidery", text: "Nice embroidery and comfortable.", images: ["https://via.placeholder.com/100"], user: "Hira", date: "Aug 14, 2025" },
    { id: 5, rating: 5, title: "Very Pretty", text: "Color and design are very beautiful.", images: [], user: "rahima k", date: "Aug 21, 2025" },
  ];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  // Reviews pagination
  const totalReviews = reviewsData.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);
  const startIndex = (currentReviewPage - 1) * reviewsPerPage;
  const currentReviews = reviewsData.slice(startIndex, startIndex + reviewsPerPage);

  const handleQuantity = (type) => {
    if (type === "minus" && quantity > 1) setQuantity(quantity - 1);
    if (type === "plus" && quantity < 100) setQuantity(quantity + 1); // Max 100
  };

  const handleSizeSelect = (size) => setSelectedSize(size);
  const handlePageChange = (page) => { if (page >= 1 && page <= totalPages) setCurrentReviewPage(page); };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section: Images */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="border rounded-md p-4 w-full flex justify-center">
            <img src={product.image} alt={product.title} className="w-80 h-80 object-contain" />
          </div>
          <div className="flex space-x-3 mt-2 overflow-x-auto w-full px-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-16 h-16 border rounded cursor-pointer flex items-center justify-center hover:border-orange-500 flex-shrink-0">
                <img src={product.image} alt={`thumb-${i}`} className="w-12 h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section: Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
          <div className="flex items-center space-x-3 mt-2 text-gray-600">
            <div>⭐ {product.rating?.rate ?? "-"}</div>
            <div className="text-sm text-gray-500">({product.rating?.count ?? "-"}) Ratings</div>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-center space-x-3">
            <span className="text-3xl font-bold text-red-600">Rs. {(product.price * 200).toFixed(2)}</span>
            <span className="line-through text-gray-400 text-lg">Rs. {(product.price * 300).toFixed(2)}</span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-semibold text-sm">-30%</span>
          </div>

          {/* Size Selector */}
          <div className="mt-6">
            <label className="block font-semibold text-gray-700 mb-1">Size</label>
            <div className="flex flex-wrap gap-3">
              {["Not Specified", "S", "M", "L", "XL"].map((size) => (
                <button key={size} onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border rounded cursor-pointer text-sm ${
                    selectedSize === size ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
                  }`}>{size}</button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center space-x-4">
            <label className="font-semibold text-gray-700">Quantity</label>
            <div className="flex border rounded w-max">
              <button className="px-4 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100" onClick={() => handleQuantity("minus")}>−</button>
              <input
                type="text" // no spinner
                value={quantity}
                onChange={(e) => {
                  let val = parseInt(e.target.value);
                  if (isNaN(val) || val < 1) val = 1;
                  if (val > 100) val = 100;
                  setQuantity(val);
                }}
                className="w-16 text-center border-l border-r text-gray-700"
              />
              <button className="px-4 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100" onClick={() => handleQuantity("plus")}>+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="flex-1 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">Buy Now</button>
            <button className="flex-1 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 font-semibold">Add to Cart</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-2 space-y-6 border rounded-md p-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Delivery Options</h3>
            <p>Punjab, Faisalabad - Satayana Road, Iqbal Nagar</p>
            <p className="mt-1">Standard Delivery - <span className="font-semibold">FREE</span></p>
            <p className="text-green-600 mt-1 font-semibold">Cash on Delivery Available</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Return & Warranty</h3>
            <p>Change of Mind</p>
            <p className="mt-1">14 days easy return</p>
            <p className="text-gray-500">Warranty not available</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Sold by</h3>
            <p className="text-blue-600 font-semibold">Dummy Store</p>
            <p>Positive Ratings: 90%</p>
            <p>Ship on Time: 95%</p>
            <button className="mt-2 text-blue-600 underline text-sm">Go to Store</button>
          </div>
        </aside>
      </div>

      {/* Product Details Section */}
      <section className="border-t pt-6 text-gray-700">
        <h2 className="text-xl font-semibold mb-3">Product details of {product.title}</h2>
        <p className="whitespace-pre-line text-sm leading-relaxed">Drensched in the dreamy allure of orchid, this ensemble is a delicate ode to modern femininity. The shirt is adorned with the subtle sheen of champagne zari and luminous 5mm gold sequins...</p>
        <ul className="text-sm list-disc list-inside space-y-1 mt-3">
          <li>Embroidered front neckline on chiffon</li>
          <li>Embroidered front center panel on chiffon</li>
          <li>Embroidered front left & right panel on chiffon</li>
          <li>Embroidered back with border on chiffon</li>
          <li>Embroidered front dasaam border on chiffon</li>
          <li>Pair of embroidered sleeves with border on chiffon</li>
          <li>2.5 meter embroidered dupatta with 2 side border on chiffon</li>
          <li>1.5 meter wide width trouser on silk</li>
        </ul>
      </section>

      {/* Questions Section */}
      <section className="border-t pt-6 text-gray-700">
        <h2 className="text-xl font-semibold mb-3">Questions about this product</h2>
        <input
          type="text"
          placeholder="Ask your question here..."
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          maxLength={300}
        />
        <div className="text-xs text-gray-400 mt-1 text-right">{questionInput.length}/300</div>
        <button
          onClick={() => {
            if (questionInput.trim() === "") return;
            alert(`Your question submitted:\n${questionInput}`);
            setQuestionInput("");
          }}
          className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-semibold"
        >
          Submit Question
        </button>
      </section>

      {/* Reviews Section */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-5">Ratings & Reviews</h2>
        <div className="flex items-center mb-6 space-x-8">
          <div className="text-4xl font-bold text-orange-500">{product.rating?.rate ?? "-"}</div>
          <div className="flex flex-col">
            {[5,4,3,2,1].map(star => {
              const count = reviewsData.filter(r => r.rating === star).length;
              return (
                <div key={star} className="flex items-center space-x-2">
                  <span>{star} stars</span>
                  <div className="bg-gray-200 rounded-full w-40 h-3 overflow-hidden">
                    <div className="bg-orange-500 h-3" style={{width:`${(count/reviewsData.length)*100}%`}}/>
                  </div>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          {currentReviews.map(review => (
            <div key={review.id} className="border rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2 text-yellow-400">{"⭐".repeat(review.rating)}</div>
                <div className="text-xs text-gray-500">{review.date}</div>
              </div>
              <h3 className="font-semibold">{review.title}</h3>
              <p className="text-sm mt-1 mb-2">{review.text}</p>
              {review.images.length>0 && (
                <div className="flex space-x-3">
                  {review.images.map((img, idx)=>(
                    <img key={idx} src={img} alt={`review-img-${idx}`} className="w-20 h-20 object-cover rounded"/>
                  ))}
                </div>
              )}
              <div className="text-xs text-gray-500 mt-2">By: {review.user}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center space-x-3">
          <button onClick={()=>handlePageChange(currentReviewPage-1)} disabled={currentReviewPage===1} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx+1;
            return <button key={pageNum} onClick={()=>handlePageChange(pageNum)} className={`px-3 py-1 border rounded ${currentReviewPage===pageNum?"bg-orange-500 text-white":""}`}>{pageNum}</button>;
          })}
          <button onClick={()=>handlePageChange(currentReviewPage+1)} disabled={currentReviewPage===totalPages} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
