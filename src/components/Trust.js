import React from 'react'
import google from '../Asset/google.png';
import amazon from '../Asset/Group.png';
import  slack from '../Asset/slack.png';
import linkedin from '../Asset/linkedin.png';
 import walmart from '../Asset/walmart.png';
 import vector from '../Asset/Vector.png'
import './Trust.css'
const Trust = () => {
  return (
    <div className='trust_section'> 
        <h1><span>200+</span> Trusted Partners</h1>
        <div className='img_section'>
        <img src={google} alt="" />
        <img src={amazon} alt="" />
        <img src={vector} alt="" />
        <img src={slack} alt="" />
        <img src={linkedin} alt="" />
         <img src={walmart} alt="" />
        </div>
        <div className='border'></div>
    </div>
  )
}

export default Trust