import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      {/* Floating animation circles */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      {/* Error Text */}
      <h1 className="text-9xl font-bold animate-bounce text-red-500">404</h1>

      <h2 className="text-3xl mt-4 font-semibold">Oops! Page Not Found</h2>

      <p className="text-gray-300 mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition duration-300 rounded-lg shadow-lg"
      >
        Go Back Home
      </button>

      {/* Small animated message */}
      <p className="absolute bottom-6 text-gray-400 animate-pulse">
        Something went wrong...
      </p>
    </div>
  );
};

export default ErrorPage;
