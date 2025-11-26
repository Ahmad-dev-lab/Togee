import React from "react";

const dummyCategories = [
  { name: "Electronics", img: "https://cdn-icons-png.flaticon.com/128/10841/10841870.png" },
  { name: "Fashion", img: "https://cdn-icons-png.flaticon.com/128/892/892458.png" },
  { name: "Mobile", img: "https://cdn-icons-png.flaticon.com/128/3304/3304569.png" },
  { name: "Beauty", img: "https://cdn-icons-png.flaticon.com/128/889/889442.png" },
  { name: "Home", img: "https://cdn-icons-png.flaticon.com/128/2769/2769326.png" },
  { name: "Sports", img: "https://cdn-icons-png.flaticon.com/128/10685/10685488.png" },
];

const Categories = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {dummyCategories.map((cat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-20 h-20 object-contain mb-3"
            />
            <p className="text-sm font-medium text-gray-700 text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
