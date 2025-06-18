import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex-1 p-6 bg-base-100">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-base-content mb-4">Page Not Found</h2>
          <p className="text-base-content/70 text-lg mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn btn-primary gap-2"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-base-200 rounded-lg">
          <h3 className="text-lg font-semibold text-base-content mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/leaderboard"
              className="p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors text-base-content"
            >
              🏆 Leaderboard
            </Link>
            <Link
              to="/reports"
              className="p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors text-base-content"
            >
              📊 Reports
            </Link>
            <Link
              to="/subscription"
              className="p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors text-base-content"
            >
              💎 Subscription
            </Link>
            <Link
              to="/"
              className="p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors text-base-content"
            >
              🏠 Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 