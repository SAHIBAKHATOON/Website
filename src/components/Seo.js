import React from 'react';
import seo_1 from '../Asset/seo_1.png';
import seo_2 from '../Asset/seo_2.png';
import seo_3 from '../Asset/seo_3.png';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import bar from '../Asset/bar.png'
import './Seo.css';
const Seo = () => {
  return (
    <div> 
        <div className='d_flex'>
            <div>
              <div className='img_1'>
              <img src={seo_1} alt="" />
              </div>
                <div className='img_2'>
                <img src={seo_2} alt="" />
                </div>
               <div className='img_3'>
               <img src={seo_3} alt="" />
               </div>
            </div>
            <div className='seo_section'>
                <h5><FaArrowRight /> WITH SEO OPTIMIZATION</h5>
                <h1>Marketing And Creative Solutions <br/> Seo</h1>
                <p>We are 100+ professional software engineers with more 
                than 10 year of experience in delivering superior products.</p>
                <div>
                   
                    <div className='flex_item'>
                        <h6>Finance Consulting</h6>
                    <h4>80%</h4>
                    </div>
                    <img src={bar} alt="" />
                    <div className='flex_item'>
                        <h6>Finance Consulting</h6>
                    <h4>80%</h4>
                    </div>
                    <img src={bar} alt="" />
                    <div className='flex_item'>
                        <h6>Finance Consulting</h6>
                    <h4>80%</h4>
                    </div>
                    <img src={bar} alt="" />
                </div>
            </div>
         
        </div>
        <div className='view_button_1'>
 <button>VIEW ALL SERVICES</button>
   <span className='circle_2'><MdOutlineArrowOutward /></span>
 
       <div className='call'>
       <span className='circle_3'><BiPhoneCall /></span>
        <h6>Call Us Anytime</h6>
        <h3>0215 6856 9875</h3>
       </div>
    </div>
    </div>

    
  )
}

export default Seo