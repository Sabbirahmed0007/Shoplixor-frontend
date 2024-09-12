import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Navbar from '../Component/Shared/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <div className='max-w-screen-2xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;