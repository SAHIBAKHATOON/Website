import React from 'react';
import './Hero.css';
 import  Hero_img from '../Asset/hero-img.png';
 import img_grp from "../Asset/img_group.png"
 import video from "../Asset/video.png"
 import {FaArrowRight } from "react-icons/fa6";
 import { MdOutlineArrowOutward } from "react-icons/md";
const Hero = () => {
  return (
    <>
    <div className='hero_section'> 
         <div className='image_section'>
       <div className='flex_items'>
       <img src={Hero_img} alt="" />
        <div className='marketing_section'>
            <h5><FaArrowRight /> WELCOME TO JYTHU</h5>
            <h1>A Marketing <span>Agency</span> To Grow Your Bussiness</h1>
            <p>We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it. Here are real numbers</p>
            <div className='started'>
            <button>GET STARTED</button>
            <div className='arrow_circle'><MdOutlineArrowOutward /></div>
                <img src={video} alt="" />  
            </div>
          
        </div>
       
       </div>
      <div className='img_grp'>
       <img src={img_grp} alt="" />
      </div>
         </div>
        
        </div>
    </>
  )
}

export default Hero