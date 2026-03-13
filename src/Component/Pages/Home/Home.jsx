import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <div className="mt-24">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
