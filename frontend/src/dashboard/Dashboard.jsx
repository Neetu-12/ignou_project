import React from 'react';
import imgAbout from '../images/banner-books/about2.webp';

const Dashboard = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${imgAbout})` }}
    >
      <div className="text-center bg-white bg-opacity-70 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the Dashboard</h1>
        <p className="text-lg text-gray-600">Manage your eBook collection, track your reading progress, and discover new favorites!</p>
      </div>
    </div>
  );
};

export default Dashboard;
