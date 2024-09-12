import { Link, NavLink } from "react-router-dom";

// logo
import logo from '../../../assets/Logo/logo-no-background.svg'

const Navbar = () => {


  const navLinks= <div className="flex flex-col md:flex-row  gap-4">
      <NavLink to={'/'} className={({isActive})=> isActive? "border-b-2 font-semibold" : ""}>Home</NavLink>
      <NavLink to={' '} className={({isActive})=> isActive? "border-b-2 font-semibold" : ""}>Home</NavLink>
      <NavLink to={' '} className={({isActive})=> isActive? "border-b-2 font-semibold" : ""}>Home</NavLink>
      
  </div>


  return (
    <div>
      <div className="navbar sticky top-0 z-50 bg-black text-white py-3 shadow-xl">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
          
        </div>
        <div className="navbar-center h">
          <Link to={'/'} className=" text-3xl ml-3 font-bold drop-shadow-lg"><img src={logo} className="w-28" alt="" /></Link>
          {/* <div><p className=" mx-3 bg-gradient-to-l from-yellow-600 via-yellow-100 to-yellow-600 text-transparent bg-clip-text"><p className="font-semibold text-xl">shoplixor</p> <p className="h-[2px] bg-gradient-to-r from-yellow-700 via-yellow-100 to bg-yellow-700"></p> <p className="bg-gradient-to-r from-yellow-600 via-yellow-100 to bg-yellow-600 bg-clip-text font-extralight text-[7px]">Gateway to Global shopping</p> </p></div> */}
        </div>
        <div className="navbar-end  ">
          <Link  to={'https://www.shop.com'} className="btn hidden lg:flex  border-none btn-sm bg-violet-600 text-white hover:bg-violet-700 hover:font-semibold">Shop Now</Link>
        </div>
        <div className="dropdown absolute right-0 ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-violet-400 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-0" >
              {navLinks}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
