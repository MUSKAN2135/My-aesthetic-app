import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { LiaBarsSolid } from 'react-icons/lia'
import { TfiShoppingCart } from 'react-icons/tfi'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import logo from '../../images/1.png'
import { FaRegHeart, FaUser } from 'react-icons/fa6'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Single state object for all dropdowns
  const [dropdownStates, setDropdownStates] = useState({
    user: false
  });

  const handleMouseEnter = (params: string) => {  //params is use multiple updates in a state like we have multiple dropdowns bt if we write them seperatly they messed up so we use this approach
    setDropdownStates((prev) => ({ ...prev, [params]: true }));//this first prev gives us previous state and then the ...prev gives us that previous copy in new object and we have access to make changes in copy 
  };
  const handleMouseLeave = (params: string) => {
    setDropdownStates((prev) => ({ ...prev, [params]: false }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 flex flex-col text-gray-600 font-[Montserrat] justify-center w-full z-10 shadow-lg">
        <div className="flex md:py-1 py-0 lg:px-20 px-6 justify-between items-center w-full z-10 bg-[#F5F1E9]">
          <div className="logo h-20 mb-[-10px] ">
            <img className='lg:h-35 h-30 lg:mt-3 mt-0 rounded-full' src={logo} alt='' />
          </div>
          <div className='lg:hidden block' onClick={toggleMenu}>
            {isMenuOpen ?
              <RxCross2 className='font-bold cursor-pointer transition duration-150 ease-in-out text-xl ' />
              :
              <LiaBarsSolid className='cursor-pointer transition duration-150 ease-in-out text-xl ' />
            }
          </div>
          <div className='lg:flex hidden items-center md:mr-3 mr-0'>
            <IoIosSearch className='mr-[-30px] cursor-pointer text-gray-500 transition duration-150 ease-in-out text-xl ' />
            <input placeholder='Search over here' className='lg:w-100 md:w-70 text-gray-500 outline-none border py-2 pl-10 rounded-md ' />
          </div>
          <div className="icons flex items-center md:py-3 lg:flex hidden">
            <Link to="/wishlist"> <FaRegHeart className='m-2 cursor-pointer hover:text-[#b18b5e] transition duration-150 ease-in-out ' /></Link>
            <Link to="/cart"> <TfiShoppingCart className='m-2 cursor-pointer hover:text-[#b18b5e] transition duration-150 ease-in-out ' /></Link>
            <div className="relative"
              onMouseEnter={() => handleMouseEnter('user')}
              onMouseLeave={() => handleMouseLeave('user')}>
              <p className='mx-6 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out' ><FaUser /></p>
              {dropdownStates.user && (
                <div className="absolute right-0 left-0 mr-4 w-40 bg-[#F5F1E9] shadow-lg  transition duration-150 ease-in-out">
                  <Link to="/signup" className="block p-3 hover:text-[#FFFFFF]  hover:bg-[#b18b5e] cursor-pointer transition duration-150 ease-in-out">Signup</Link>
                  <hr className='text-gray-300' />
                  <Link to="/login" className="block p-3 hover:text-[#FFFFFF]  hover:bg-[#b18b5e] cursor-pointer transition duration-150 ease-in-out">Login</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="topbar pb-2 bg-[#F5F1E9] flex lg:justify-around justify-between items-center">
          <div className="nav-link lg:block hidden">
            <hr className='text-gray-600 pb-2' />
            <div className='flex'>
              <Link to="/" className='mx-6 mb-2 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out'>Home</Link>
              <Link to="/contact" className='mx-6 mb-2 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out'>Shop</Link>
              <Link to="/contact" className='mx-6 mb-2 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out'>Blog</Link>
              <Link to="/contact" className='mx-6 mb-2 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out'>About US</Link>
              <Link to="/contact" className='mx-6 mb-2 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      {/* hamburger togglemenu*/}
      {isMenuOpen &&
        <div className="nav-link bg-[#F5F1E9] pt-28 pb-10 px-12 shadow-lg transition duration-150" data-aos="fade-down" data-aos-duration="1000">
          <div className='flex justify-center items-center md:mr-3 my-2  mr-0'>
            <IoIosSearch className='mr-[-30px] cursor-pointer text-gray-500 transition duration-150 ease-in-out text-xl ' />
            <input placeholder='Search over here' className='w-full text-gray-500 outline-none border py-2 pl-10 rounded-md ' />
          </div>
            <ul className='flex-col'>
              <li className='mx-6 py-4 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out '>Home</li>
              <li className='mx-6 py-4 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out '>Shop</li>
              <li className='mx-6 py-4 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out '>Blog</li>
              <li className='mx-6 py-4 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out '>Pages</li>
              <li className='mx-6 py-4 hover:text-[#b18b5e] cursor-pointer transition duration-150 ease-in-out '>Contact</li>
            </ul>
              <div className="icons flex justify-center mx-3">
                <Link to='/cart' className='w-40 rounded-md flex items-center justify-center p-3  bg-[#b18b5e] hover:bg-[transparent] hover:border hover:border-[#b18b5e]  m-2'> <TfiShoppingCart className='mx-2 cursor-pointer hover:text-yellow-600 transition duration-150 ease-in-out ' />Cart</Link>
                <Link to='/myaccount' className='w-40 rounded-md flex items-center p-3 m-2 hover:bg-[transparent] hover:border hover:border-[#b18b5e]  cursor-pointer transition duration-150 ease-in-out bg-[#b18b5e]' ><FaUser className='mx-2' />My Account</Link>
              </div>
          </div>
      }
    </>
  )
}