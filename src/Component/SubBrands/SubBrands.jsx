import React from 'react';
import { Link } from 'react-router-dom';
import './subbrand.css'

const SubBrands = () => {
    return (
        <div className='text-center bg-wave lg:h-[400px]  flex flex-col items-center justify-center'>
            <div className='my-10'>
                <h1 className='text-4xl font-bold mb-4'>Our Sub Brands</h1>
                <h2>Trusted Brands for Quality Shopping Experience </h2>
            </div>
            <div className='flex flex-row md:font-extrabold mb-5 flex-wrap gap-10 lg:gap-24 items-center justify-center '>
                <Link to={'https://www.getlayered.com/CBAKER'} className='text-3xl font-pacific font-extrabold hover:text-blue-500'>Layered</Link>
                <Link to={'https://www.isotonix.com/CBAKER'} className='text-4xl font-greatvibes hover:text-blue-500'>Isotonix</Link>
                <Link to={'https://www.lumieredevie.com/CBAKER'} className='text-3xl font-merriwheather hover:text-blue-500'>Lumiere</Link>
                <Link to={'https://www.motivescosmetics.com/CBAKER'} className='text-3xl font-comic font-semibold hover:text-blue-500'>Motives </Link>
                <Link to={'https://www.shop.com/CBAKER'} className=' text-3xl font-Playfair font-black hover:text-blue-500'>Shop.com</Link>
            </div>
                
        </div>
    );
};

export default SubBrands;