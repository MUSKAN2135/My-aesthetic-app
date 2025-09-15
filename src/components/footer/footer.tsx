import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6'
import { IoLocation } from 'react-icons/io5'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Footer() {
    const links = [
        { name: "Login", path: "/login" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "FAQs", path: "/FAQs" },
        { name: "Contact", path: "/contact" }
    ];
    const navItems = [
        { name: "Home", path: "/home" },
        { name: "Shop", path: "/shop" },
        { name: "Blog", path: "/blog" },
        { name: "About Us", path: "/aboutUs" }
    ];

    return (
        <div className='bg-black text-white'>
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 font-[Montserrat] leading-10 pt-20 pb-10 lg:px-17 px-7">
                <div className="py-5 md:px-0 w-full">
                    <h1 className='font-[Montserrat] text-5xl p-2'>ALA.</h1>
                    <p className='p-2 leading-7 text-gray-400'>
                        Gentle textures, mindful design
                        Crafted to soothe, styled to charm
                        {/* Made to feel, made to last. */}
                    </p>
                    <div className='foot-icons flex'>
                        <FaFacebookF className='p-3 text-4xl shadow-md rounded-full m-2 bg-white text-black' />
                        <FaTwitter className='p-3 text-4xl shadow-md rounded-full m-2 bg-white text-black' />
                        <FaLinkedin className='p-3 text-4xl shadow-md rounded-full m-2 bg-white text-black' />
                        <FaInstagram className='p-3 text-4xl shadow-md rounded-full m-2 bg-white text-black' />
                    </div>
                </div>
                <div className="py-5 md:px-0 lg:w-45 md:w-50 w-auto">
                    <h2 className='text-white text-xl'>Company</h2>
                    <ul>
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="w-25 group hover:text-[#b18b5e] transition duration-300 cursor-pointer flex items-center">
                                <MdOutlineKeyboardArrowRight className="text-2xl text-white p-1 hidden group-hover:block" />
                                {link.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="py-5 md:px-0 lg:w-40  md:w-50 w-auto">
                    <h2 className='text-white text-xl'>Services</h2>
                    <ul>
                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                className="group w-25 hover:text-[#b18b5e] transition duration-300 cursor-pointer flex items-center" >
                                <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="py-5 md:px-0 lg:w-80 w-full">
                    <h2 className='text-white text-xl'>Contact</h2>
                    <div>
                        <p>Al Hafeez Garden phase 2</p>
                        <div className='flex items-center'>
                            <IoLocation className='bg-[#b18b5e] p-3 w-11 h-11 mr-2 rounded-full' />
                            <p className='p-1'>Lahore.</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhone className='bg-[#b18b5e] p-3 w-11 h-11 mr-2 rounded-full' />
                            <div className='p-1'>
                                <h5>+923015128480
                                    <p>Mon-Sat: 9AM-12PM</p>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-full py-5 text-white' />
        </div>
    )
}
