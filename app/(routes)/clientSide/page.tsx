"use client";
import React, { useEffect, useState } from "react";

interface Rating {
  rate: number;
  count: number;
}

interface Iproducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const Clientside = () => {
  const [products, setProducts] = useState<Iproducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Iproducts[] = await res.json();
      setProducts(parsedResponse);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  return (
    <div className="bg-gray-600 min-h-screen">
      <h1 className="text-center pt-5 text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
        Client Side Data Fetching
      </h1>
      <div className="p-10 gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-950 rounded-lg p-4 py-5 hover:scale-105 bg-white flex flex-col justify-between h-full"
          >
            <div>
              <img
                src={product.image}
                alt="Product Image"
                className="w-full h-48 object-contain mb-5"
              />
              <h1 className="font-semibold text-2xl">{product.title}</h1>
              <p className="font-semibold">Category: {product.category}</p>
              <p className="text-sm line-clamp-1 text-gray-900 mt-5">
                {product.description}
              </p>
              <p className="font-semibold mt-3">Price: ${product.price}</p>
              <div className="flex justify-between mt-2">
                <p className="text-red-800">Rate: ${product.rating.rate}</p>
                <p className="flex gap-2">
                  3.4 (Review: {product.rating.count})
                </p>
              </div>
            </div>
            <button className="px-4 py-3 bg-[#b0c8e9] rounded hover:bg-[#4d7cda] mt-4">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientside;
