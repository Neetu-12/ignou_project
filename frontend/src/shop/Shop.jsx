import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import localBookData from "../bookData.json"; // <-- your fallback file
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [isDBConnected, setIsDBConnected] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // You can pass state or query params if needed
    navigate('/payment');
  };
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/all-books`);

        // if server didn't respond properly
        if (!res.ok) {
          throw new Error("Failed to connect with DB");
        }

        const data = await res.json();

        // if data structure is correct
        if (data?.data?.length > 0) {
          setBooks(data.data);
          setIsDBConnected(true);
        } else {
          throw new Error("Empty or invalid DB data");
        }
      } catch (err) {
        console.warn("⚠️ Using local JSON data:", err.message);
        setBooks(localBookData);
        setIsDBConnected(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">
        {isDBConnected ? "Books from Database" : "Books from Local Data"}
      </h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book, index) => (
          <Card key={index}>
            <img src={book.imgUrl} alt={book.bookTitle} className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.description || "No description available"}
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded" onClick={handleBuyNow}>
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
