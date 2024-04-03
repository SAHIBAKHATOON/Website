import React from 'react';
import './Work.css'
import { FaArrowRight } from "react-icons/fa6";
import C_1 from "../Asset/C_1.png";
import C_2 from "../Asset/C_2.png";
import C_3 from "../Asset/C_3.png";

const Work = () => {
  return (
    <>
    <div className=' work_section'> 
    <h5><FaArrowRight /> OUR BEST SERVICES</h5>
    <h1>A Simple, Yet Powerful And
      <br/> Efficient Process</h1>
    </div>
    <div className='circle_flex'>
        <div >
            <img src={C_1} alt="" />
            <h2>1. MARKETING PLAN</h2>
            <p>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. </p>
        </div>
        <div>
            <img src={C_2} alt="" />
            <h2>2. EXECUTION</h2>
            <p>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. </p>
        </div>
        <div>
            <img src={C_3} alt="" />
            <h2>2. GROWTH & SCALE</h2>
            <p>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. </p>
        </div>
    </div>

    {/* ---------------------------- */}
    
    </>
  )
}

export default Work