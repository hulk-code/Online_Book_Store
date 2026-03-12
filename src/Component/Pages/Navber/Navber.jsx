import React from "react";

const Navber = () => {

  const links = (
    <>
      <li><a className="text-green-600 border border-green-500 rounded-lg px-4">Home</a></li>
      <li><a>Listed Books</a></li>
      <li><a>Pages to Read</a></li>
    </>
  );

  return (
    <div className="navbar bg-gray-100 px-10 py-4">

      {/* Left */}
      <div className="navbar-start">
        <h1 className="text-2xl font-bold">Book Vibe</h1>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-lg">
          {links}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-4">

        <button className="btn bg-green-600 text-white border-none">
          Sign In
        </button>

        <button className="btn bg-cyan-500 text-white border-none">
          Sign Up
        </button>

      </div>

    </div>
  );
};

export default Navber;