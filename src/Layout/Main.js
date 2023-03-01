import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (

        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='mx-5 '>

                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>

    );
};

export default Main;