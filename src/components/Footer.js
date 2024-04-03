import React from 'react'
import footer_img from "../Asset/ footer_img (1).png";
import logo from '../Asset/logo.png'
import  './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='banner'>
    <div className="footer_section"> 
        <div className='footer_item'>
        <img src={footer_img} alt="" />
        <div>
          <h1>Subscribe To Our Newsletter!</h1>
          <p>We are 100+ professional software engineers with more than 10 years in delive ring super products it because you've seen it.</p>
          <input type="text" />
          <button>SUBMIT</button>
        </div>
        </div>
        {/*  */}
        <div className='kirana-club'>
       <div className='logo'>
       <img src={logo} />
       <div className='para'> 
        <p>Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available</p>
       </div>
       </div>

      <ul>
        <h2>Resources</h2>
        <li>Carrer</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Services</li>
        </ul>
        <ul>
          <h2>Company </h2>
        <li>Blogs</li>
        <li>Developers</li>
        <li>Our Story</li>
        <li>About Us</li>
        </ul>
        <ul> 
          <h2>Help Pages</h2>
        <li>Customer</li>
        <li> Developers</li>
        <li>Our Story</li>
        <li>About Us</li>
       </ul>
      

     </div>
      
     <div className='copy-flex'>
  <p>Copyright © 2024, All Rights Reserved.</p>
</div>
        {/*  */}
        </div>
    </div>
    </>
  )
}

export default Footer