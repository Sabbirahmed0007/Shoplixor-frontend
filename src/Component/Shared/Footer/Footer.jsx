import { Link } from 'react-router-dom';
import {  FaInstagram, FaPinterest, FaThreads, FaTiktok,  } from 'react-icons/fa6';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";



// logo
import logo from '../../../assets/Logo/logo-no-background.svg'
import logo1 from '../../../assets/Logo/logo-black.svg'

const Footer = () => {
    return (
        <div className='text-white'>
            <div className='grid bg-black grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-evenly pt-10 pb-4 px-5 '>
                {/* Logo */}
                <div className='flex items-center self-center justify-center'>
                    <Link to={'/'}>
                        <img src={logo} alt="" className='w-36'/>
                    </Link>
                </div>

                {/* Services */}
                <div>
                    <h2 className='font-bold mb-2'>Our Services</h2>
                    <div>
                    </div>
                        <p className="text-xs capitalize">Skin care products</p>
                        <p className="text-xs capitalize">Beauty & Cosmetics</p>
                        <p className="text-xs capitalize">Cloths & fashions</p>
                        <p className="text-xs capitalize">Jewelaries</p>
                        <p className="text-xs capitalize">Health and Nutritions</p>

                </div>

                {/* Legal policis */}
                <div className=' flex  items-center justify-center lg:justify-start '>
                    <div>
                        <h2 className='font-bold mb-2 '>Legal Policy</h2>
                        <Link><p className='text-xs hover:text-green-400 capitalize'>Terms and conditions</p></Link>
                        <Link><p className='text-xs hover:text-green-400 capitalize'>Privacy policy</p></Link>
                        <Link><p className='text-xs hover:text-green-400 capitalize'>Cookie policy</p></Link>
                        <Link><p className='text-xs hover:text-green-400 capitalize'>About us</p></Link>

                    </div>
                </div>
                
                {/* Social media and newsletters */}
                <div>
                    {/* Social media */}
                        <h2 className='font-bold mb-2 '>Stay In Touch</h2>
                        <div className='flex items-center flex-wrap justify-start gap-4'>
                            <Link className='text-xl' to={'https://www.facebook.com/profile.php?id=61565264173966&mibextid=ZbWKwL'}><FaFacebookF></FaFacebookF></Link>
                            <Link className='text-xl' to={'https://www.instagram.com/shoplixor'}><FaInstagram></FaInstagram></Link>
                            <Link className='text-xl' to={'https://www.threads.com'}><FaThreads></FaThreads></Link>
                            <Link className='text-xl' to={'https://www.pinterest.com'}><FaPinterest></FaPinterest></Link>
                            <Link className='text-xl' to={'https://www.tiktok.com'}><FaTiktok></FaTiktok></Link>
                            <Link className='text-xl' to={'mailtoshoplixor@gmail.com'}><MdEmail></MdEmail></Link>
                        </div>
                    
                    {/* news letter */}

            </div>
            {/* Copyright */}
            </div>
                    <div className="footer footer-center bg-black  p-4">
                <aside>
                    <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by <span  className="uppercase font-bold">Shoplixor</span> </p>
                </aside>
            </div>

        </div>
    );
};

export default Footer;