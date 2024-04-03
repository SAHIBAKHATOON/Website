import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import card_1 from "../Asset/card_1.png"
import './SliderCard.css'
import Slider from "react-slick";
import progress from '../Asset/Progress bar.png';
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { TbCircleArrowRight } from "react-icons/tb";
const SliderCard = () => {
  var settings = {
    dots:   true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
     <>
     <div className=' work_section'> 
    <h5><FaArrowRight />  OUR TESTIMONIAL</h5>
    <h1>What Our Clients Say
  <br/> About Us</h1>
    </div>
    <div className="card_section">
     


{/* <Slider {...settings}> */}
       
      <div className='card'>
     <div className='star'>
     <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
     </div>
     <div className='card_item_flex'>
     <img src={card_1} alt="" />
      
      <p>“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”</p>
     </div>

<hr/>
<div className='card_flex'>
<h5>ESTHER HOWARD</h5>
<h6>FINANCE SPECIALIST</h6>
</div>
     </div>
     <div className='card'>
     <div className='star'>
     <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
     </div>
     <div className='card_item_flex'>
     <img src={card_1} alt="" />
      
      <p>“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”</p>
     </div>

<hr/>
<div className='card_flex'>
<h5>ESTHER HOWARD</h5>
<h6>FINANCE SPECIALIST</h6>
</div>
     </div>
      
      <div className='card'>
     <div className='star'>
     <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
      <LiaStarSolid />
     </div>
     <div className='card_item_flex'>
     <img src={card_1} alt="" />
      
      <p>“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”</p>
     </div>

<hr/>
<div className='card_flex'>
<h5>ESTHER HOWARD</h5>
<h6>FINANCE SPECIALIST</h6>
</div>
     </div>
       
       
    {/* </Slider> */}
{/*  */}
    </div>
    <div className='progress_bar'>
        <img src={progress} alt="" />
        <HiOutlineArrowCircleLeft />
<TbCircleArrowRight />
       </div>
    </>
  )
}

export default SliderCard;