import React from "react";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center mt-20">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
    <p className="text-xl font-semibold mt-4 text-gray-700">Loading...</p>
  </div>
);

export default LoadingSpinner;
