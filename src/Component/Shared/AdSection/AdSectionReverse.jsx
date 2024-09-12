import React from 'react';
import { Link } from 'react-router-dom';

const AdSectionReverse = ({image, heading, description, address}) => {
    return (
        <div className='bg-stone-200'>
            <div className=' w-10/12 mx-auto py-10 gap-8 grid grid-cols-1  lg:grid-cols-2  items-center justify-evenly'>
                <div className=' lg:mx-10 font-playfair text-right'>
                    <h1 className='font-extrabold text-3xl'>{heading}</h1>
                    <p className='my-4 text-justify font-medium'>{description}</p>
                    <Link to={address} className='btn font-semibold border-none drop-shadow-xl rounded-full text-white bg-green-600 hover:bg-green-700 hover:text-yellow-500'> Shop Now</Link>
                </div>
                <div className='md:w-96 mx-auto rounded-2xl '>
                    <img src={image} alt="image" className='rounded-3xl  ' />
                </div>
            </div>
        </div>
    );
};

export default AdSectionReverse;