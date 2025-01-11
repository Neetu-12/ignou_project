import React from 'react';
import imgAbout from '../../images/banner-books/about.webp';

const About = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${imgAbout})` }}
    >
      <div className="text-center bg-white bg-opacity-50 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
        <span className="text-lg text-gray-900">At eBook Store, we believe that books have the power to transform lives.
        </span>
        <p className="text-lg text-gray-900 mt-2">Our vision is to create a platform where knowledge, entertainment, and inspiration are just a click away.</p>
        <p className="text-lg text-gray-900 mt-2">
          Get your Favourite Book Collection!
        </p>
      </div>
    </div>
  );
};

export default About;
