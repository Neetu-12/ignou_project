import React from 'react';
import './banner.css';
import BannerCard from '../../pages/Home/BannerCard';

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40 w-full">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6 h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug text-black">
            Buy and sell your books
            <span className="text-blue-700"> for the best Prices!</span>
          </h2>
          <p className="md:w-4/5 text-gray-800">
            An online bookstore is a haven for book enthusiasts, offering a vast selection of titles from the comfort of your home. Whether you're searching for the latest bestsellers, timeless classics, or niche genres, an online bookstore provides endless options at your fingertips. With detailed descriptions, reviews, and recommendations, finding your next favorite read is easier than ever. Plus, convenient delivery options and digital formats ensure you can dive into a new story anytime, anywhere. It’s not just about buying books; it’s about experiencing the joy of reading in the digital age!
          </p>
          {/* Optional Search Bar */}
          {/* 
          <div className="flex mt-4">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-4 rounded-l-md outline-none w-full md:w-auto"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md">
              Search
            </button>
          </div>
          */}
        </div>

        {/* Right Banner Card Section */}
        <div className="md:w-1/2 flex justify-center">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
