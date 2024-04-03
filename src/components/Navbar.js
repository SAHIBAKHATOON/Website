import React from 'react'
import logo from '../Asset/logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight, FaBarsStaggered  } from "react-icons/fa6";
import './Navbar.css'
const  Navbar = () => {
  return (
   <>
   <nav>
   <div className='flex_item'> 
        <img src={logo} alt="" />
      <ul>
        <li>Home <MdKeyboardArrowDown /> </li>
        <li>About Us</li>
        <li>Pages <MdKeyboardArrowDown /> </li>
        <li>Service <MdKeyboardArrowDown /> </li>
         <li>News & Event <MdKeyboardArrowDown /> </li>
         <li>Contact Us  </li>
      </ul>
    <div className='bar'>
    <FaBarsStaggered  />
    </div>
      <div className='flex_item_2'>
      <div className='icon'>
      <div className='circle'>1</div>
      <MdOutlineShoppingBag />
      
      <IoIosSearch />
      </div>
      <button>GET QUOTE <FaArrowRight /></button>
      </div>
    </div>
   </nav>
   </>
  )
}

export default  Navbar