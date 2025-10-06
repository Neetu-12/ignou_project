import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleBook = () => {
  const [loader, setLoader] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/books/${params.id}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => setLoader(result.data[0]))
      .catch((error) => console.error(error));
  }, [params])
  // console.log(loader);

   const handleBuyNow = () => {
    // You can pass state or query params if needed
    navigate('/payment');
  };

  return (
    <div className="mt-28 px-4 lg:px-24 flex items-start space-x-16">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img src={loader.imgUrl} alt="" className="h-96 object-cover mt-4 mb-16 mx-auto rounded-md shadow-lg border border-gray-200" />
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-2xl font-bold">{loader.bookTitle}</h1>
        <h3 className="text-lg font-medium text-gray-700">{loader.authorName}</h3>
        <h3 className="text-lg font-medium text-gray-600">{loader.category}</h3>
        <h3 className="text-lg font-medium text-gray-600">{loader.imgUrl}</h3>
        <h3 className="text-lg font-medium text-gray-600">{loader.bookPdfUrl}</h3>
        <p className="mt-4 lg:mt-6 text-base text-gray-600">{loader.description}</p>
      <button className="bg-blue-700 font-semibold text-white py-3 px-4 rounded mt-6" onClick={handleBuyNow}>
        Buy Now
      </button>
      </div>
    </div>

  )
}

export default SingleBook;