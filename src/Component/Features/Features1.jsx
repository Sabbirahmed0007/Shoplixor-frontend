import React from 'react';
import { FaBraille } from "react-icons/fa";
import { FaCertificate, FaChartPie } from "react-icons/fa6";


const Features1 = () => {
    return (
        <div >
            <div className='flex flex-col gap-y-10 py-10 lg:flex-row text-center items-center justify-center mx-3'>
                <div className='lg:mx-3'>
                    <div className='flex items-center justify-center my-3'>
                        <FaBraille className='text-7xl'/>
                    </div>
                    <h1 className='text-2xl font-bold'>Effortless Brand Switching </h1>
                    <p>Easily switch brands without restarting your shopping. </p>
                </div>
                <div className='lg:mx-3'>
                    <div className='flex items-center justify-center my-3'>
                        <FaCertificate className='text-7xl'/>
                    </div>
                    <h1 className='text-2xl font-bold'>Unified Shopping Experience </h1>
                    <p>Enjoy fluid navigation throughout our multi-brand platform. </p>
                </div>
                <div className='lg:mx-3'>
                    <div className='flex items-center justify-center my-3'>
                        <FaChartPie className='text-7xl'/>
                    </div>
                    <h1 className='text-2xl font-bold'>Personalized Product Recommendations </h1>
                    <p>Find tailored product suggestions for your unique needs. </p>
                </div>
            </div>
        </div>
    );
};

export default Features1 ;