import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;