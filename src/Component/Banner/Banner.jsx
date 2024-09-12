import React from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/Banner/banner.jpeg"
// 
const Banner = () => {
  return (
    <div>
      <div className="hero mix-h-screen h-[500px] bg-primary" style={{backgroundImage:`url(${bannerImg})`, }}>   
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white">Unifying Shopping for Diverse Product Lines </h1>
            <p className="mb-5 font-bold text-lg">Discover a seamless shopping journey combining your favorite brands across categories, all in one place. </p>
            <div className="">
                <NavLink to={'https://www.shop.com'} className="btn btn-sm lg:btn-md  text-white font-medium border-none bg-violet-600 hover:bg-black">Shop Now</NavLink>
                <button className="btn btn-sm lg:btn-md bg-transparent  border-violet-600 border-2 hover:bg-black text-white ml-3">Explore Collections</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
