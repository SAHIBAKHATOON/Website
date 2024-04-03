import React from 'react';
import './Developer.css';
import triangle from '../Asset/triangle.png';
import g_1 from '../Asset/g_1.png';
import g_2 from '../Asset/g_2.png';
import g_3 from '../Asset/g_3.png';
import subtract from '../Asset/Subtract.png';
import subtract1 from '../Asset/Subtract-2.png';
import { MdOutlineArrowOutward,MdOutlineCallMade } from "react-icons/md";
import {  } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import rectanlge1 from "../Asset/Rectangle 1.png";
import rectanlge2 from "../Asset/Rectangle 2.png";
import rectanlge3 from "../Asset/Rectangle 3.png";
import arrow from "../Asset/Arrow.png";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { TbCircleArrowRight } from "react-icons/tb";

const Developer = () => {
  return (
    <>
    <div className='digital_section'>
       <div className='flexible_item'>
       <h1>DIGITAL</h1> 
      <img src={triangle} alt="" />
      <h1>JYHTU</h1>
      <img src={triangle} alt="" />
      <h1>CREATIVE</h1>
       </div>
    </div>
  {/* <div className='subtract'>
  <img src={subtract} alt="" />
  </div> */}
    <div className='flex_section_1'>
        
        <div className='green_circle'>
        <img src={g_1} alt="" />
        <h3>RACHNA SHETH</h3>
        <p>FULL STACK DEVELOPER</p>
        </div>
      {/* <div className="subtract_1">
      <img src={subtract1} alt="" />
      </div> */}
        <div className='green_circle'>
        <img src={g_2} alt="" />
        <h3>RACHNA SHETH</h3>
        <p>FULL STACK DEVELOPER</p>
        </div>
      
        <div className='green_circle'>
        <img src={g_3} alt="" />
        <h3>RACHNA SHETH</h3>
        <p>FULL STACK DEVELOPER</p>
        </div>
    </div>
    <div className='view_button'>
 <button>VIEW ALL TEAM</button>
   <span className='circle_2'><MdOutlineArrowOutward /></span>
 </div>
 {/*  */}

 <div className='project_section'>
 <div>
 <h5><FaArrowRight />OUR BEST PROJECTS</h5>
 <h1>Take A Look Our Work <br/>
Gallery Recent Projects</h1>
 </div>
<div>
    <p>We Are 100+ Professional Software Engineers With More Than 10 Years Of Experience In Delivering Superior</p>
</div>
 </div>
 <div className='view_button'>
 <button>VIEW ALL SERVICES</button>
   <span className='circle_2'><MdOutlineArrowOutward /></span>
 </div>

 <div className='image_section_2'>
<img src={rectanlge1} alt="" />
<img src={rectanlge2} alt="" />
<div className='arrow_image'>
{/* <MdOutlineCallMade /> */}
<img src={arrow} alt="" />
<div className="marketing_button">
<button>marketing</button>
<h2>Social Media Marketing</h2>
</div>
</div>

<img src={rectanlge3} alt="" />
 </div>
<div className='arrows'>
<HiOutlineArrowCircleLeft />
<TbCircleArrowRight />
</div>
    </>
  )
}

export default Developer