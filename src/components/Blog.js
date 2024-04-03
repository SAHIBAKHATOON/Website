import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import blog1 from '../Asset/blog_1.png';
import blog2 from '../Asset/blog_2.png';
import blog3 from '../Asset/blog_3.png';
import blog4 from '../Asset/blog_4.png';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <div className='about_section blog_section'>
                <div>
                    <h5><FaArrowRight /> OUR BLOGS & NEWS</h5>
                    <h1>Get More Update <br />
                        For News</h1>

                    <p>We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it. Here are real numbers</p>
                </div>
              

               {/*  */}
               <div className='blog_img_section'>
                <img src={blog1} alt="" />
                <img src={blog2} alt="" />
                <img src={blog3} alt="" />
                <img src={blog4} alt="" />
               </div>

               {/*  */}

               {/*  */}
               <div className='blog_card_section'>
                    <div className="blog_card">
                      <div className='blog_flex'>
                      <button>Design</button>
                      <h6>March 7, 2024</h6>
                      </div>
                      <h2>Agency Needs To Embrace Social <br/> Media..</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac <br/> semper id proin mi nulla</p>
                      
                      <h2></h2>
                    </div>
                    <div className="blog_card">
                      <div className='blog_flex'>
                      <button>Bussiness</button>
                      <h6>March 7, 2024</h6>
                      </div>
                      <h2>Lead Designer’s UI/UX Core <br/>Checklist.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac <br/> semper id proin mi nulla</p>
                      
                      <h2></h2>
                    </div>
                    <div className="blog_card">
                      <div className='blog_flex'>
                      <button>Development</button>
                      <h6>March 7, 2024</h6>
                      </div>
                      <h2>Lead Designer’s UI/UX Core <br/>Checklist.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac <br/> semper id proin mi nulla</p>
                      
                      <h2></h2>
                    </div>
                    <div className="blog_card">
                      <div className='blog_flex'>
                      <button>Marketing</button>
                      <h6>March 7, 2024</h6>
                      </div>
                      <h2>We Are Building Everything You <br/> Needed</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac <br/> semper id proin mi nulla</p>
                      
                      <h2></h2>
                    </div>

               </div>
               {/*  */}
            </div>
            <div className='experience'>
                <div className='twenty_four'>

                    <div className='get'>
                        <button>VIEW ALL BLOG</button>
                        <span className='circle_2'><MdOutlineArrowOutward /></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog