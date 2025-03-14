import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../shared/Footer';

const Mainlayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='max-w-7xl mx-auto'>
            
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Mainlayout;