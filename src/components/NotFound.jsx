import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    <h1 className="text-6xl font-extrabold mb-4 text-gray-800">404</h1>
    <p className="text-xl mb-6 text-gray-600">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="btn btn-primary px-6 py-2 rounded-md hover:bg-primary-focus transition">
      Go Home
    </Link>
  </div>
);

export default NotFound;