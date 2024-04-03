import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import about_img from "../Asset/about_img.png";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import './About.css'
const About = () => {
  return (
    <>
    <div className='about_section'> 
        <div>
        <h1>We Want To Give You The Best Service</h1>
    <h5><FaArrowRight />ABOUT US</h5>
    <p>We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it. Here are real numbers</p>
        </div>
    <img src={about_img} alt="" />
    
    </div>
      <div className='experience'>
       <div className='twenty_four'>
      
       <h2>24</h2>
        <h4>Year <br/> Experience</h4>
       
        <button>GET STARTED</button>
        <span className='circle_2'><MdOutlineArrowOutward /></span>
       </div>
     <div className='product'>
     <ul>
     <li><button className='tick'><FaCheck /></button> Product Engineering</li>
       <li><button className='tick'><FaCheck /></button>Digital Services</li>
     <li><button className='tick'><FaCheck /></button>IT Consultancy</li>
     <li><button className='tick'><FaCheck /></button>Digital Services</li>
     </ul>
    
     </div>
      </div>
    </>
  )
}

export default About