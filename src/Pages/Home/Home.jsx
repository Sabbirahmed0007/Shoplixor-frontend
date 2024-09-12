import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Features1 from '../../Component/Features/Features1';
import SubBrands from '../../Component/SubBrands/SubBrands';
import AdSection from '../../Component/Shared/AdSection/AdSection';
import AdSectionReverse from "../../Component/Shared/AdSection/AdSectionReverse";

// img 
import skinCare from '../../assets/ADs/skin-care.jpg'
import cosmetics from "../../assets/ADs/cosmetics.jpg";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBrands></SubBrands>
            <div className='bg-violet-200'>
                <Features1></Features1>
            </div>
            <AdSection 
                heading={'Enhance Your Natural Beauty with Skincare '}
                image={skinCare}
                description={'Our effective and luxurious skincare products are crafted to help you achieve radiant and youthful skin, effortlessly. Discover our versatile beauty solutions today and embrace the confidence that comes with looking your best. '}
                address={'https://www.isotonix.com/'}
            ></AdSection>
            <AdSectionReverse
                heading= {'Express Your Style with Premium Cosmetics '}
                description={'Our exquisite cosmetics line offers a variety of stunning shades and rich textures to enhance your unique beauty. Dive into our collection to express your individuality and elevate your beauty routine effortlessly. '}
                address={'https://www.motivescosmetics.com/'}
                image={cosmetics}
            ></AdSectionReverse>
        </div>
    );
};

export default Home;