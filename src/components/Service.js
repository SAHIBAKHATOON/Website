import React from 'react'
import './Service.css';
import { FaArrowRight } from "react-icons/fa6";
import  d_1 from '../Asset/d_1.png';
import  d_2 from '../Asset/d_2.png';
import  d_3 from '../Asset/d_3.png';
import  d_4 from '../Asset/d_4.png';
import  d_5 from '../Asset/d_5.png';
import  d_6 from '../Asset/d_6.png';
import circle from '../Asset/circle.png';
import { MdOutlineArrowOutward } from "react-icons/md";
const Service = () => {
  return (


    <>
    <div className='service_section'>
    <h5><FaArrowRight />OUR BEST SERVICES</h5>
    <h1>We Provide Best Services</h1>
    </div>
   <div className='d_flex'>
   <div className='flex_section'>
      <div className='d_flex_1'>
        <img src={d_1} alt="" />
        <h3>Strategy & Planning</h3>
        <p>Lorem ipsum dolor sit amet bibendum elit sit 
        finibus. Maximus sodales parturien lore arcu 
        eros vel erat pede netus qu.</p>
        <div  className='cicle_img'>
        <img src={circle} alt="" />
        </div>
      </div>
       
    </div>
    <div className='flex_section'>
      <div className='d_flex_1'>
        <img src={d_2} alt="" />
        <h3>Planning & Strategy</h3>
        <p>Lorem ipsum dolor sit amet bibendum elit sit 
        finibus. Maximus sodales parturien lore arcu 
        eros vel erat pede netus qu.</p>
        <div  className='cicle_img'>
        <img src={circle} alt="" />
        </div>
      </div>
       
    </div>
    <div className='flex_section'>
      <div className='d_flex_1'>
        <img src={d_3} alt="" />
        <h3>Content Marketing</h3>
        <p>Lorem ipsum dolor sit amet bibendum elit sit 
        finibus. Maximus sodales parturien lore arcu 
        eros vel erat pede netus qu.</p>
        <div  className='cicle_img'>
        <img src={circle} alt="" />
        </div>
      </div>
       
    </div>
   </div>

   <div className='d_flex'>
   <div className='flex_section'>
      <div className='d_flex_1'>
        <img src={d_4} alt="" />
        <h3>Seo Audits & Strategy</h3>
        <p>Lorem ipsum dolor sit amet bibendum elit sit 
        finibus. Maximus sodales parturien lore arcu 
        eros vel erat pede netus qu.</p>
        <div  className='cicle_img'>
        <img src={circle} alt="" />
        </div>
      </div>
       
    </div>
    <div className='flex_section'>
      <div className='d_flex_1'>
        <img src={d_5} alt="" />
        <h3>Design & Development</h3>
        <p>Lorem ipsum dolor sit amet bibendum elit sit 
        finibus. Maximus sodales parturien lore arcu 
        eros vel erat pede netus qu.</p>
        <div  className='cicle_img'>
        <img src={circle} alt="" />
        </div>
      </div>
       
    </div>
    <div className='flex_section'>
      <div className='d_flex_1'>
        <img src={d_6} alt="" />
        <h3>Seo Audits & Strategy</h3>
        <p>Lorem ipsum dolor sit amet bibendum elit sit 
        finibus. Maximus sodales parturien lore arcu 
        eros vel erat pede netus qu.</p>
        <div  className='cicle_img'>
        <img src={circle} alt="" />
        </div>
      </div>
       
    </div>
   
   </div>
 <div className='view_button'>
 <button>VIEW ALL SERVICES</button>
   <span className='circle_2'><MdOutlineArrowOutward /></span>
 </div>
    </>
    
     

  )
}

export default Service