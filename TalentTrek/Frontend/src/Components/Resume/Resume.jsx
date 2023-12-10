import React from 'react'
import "./Resume.css"
import { Link } from 'react-router-dom';
import { Rectangle59,Rectangle60,Rectangle61 } from '../../assets/index-assets'
const Resume = () => {
  return (
    <section id='Resume'>
      <div className='bg'>
        <div className='TextBlock'>
          <img src={Rectangle61} alt="Rectangle61" className="imageBlack" />
          <div class="ResumeParagraph">
            <p >Let your resume speak volumes about your potential!</p>
            <a href='#' className='headingResume'><Link to="/resumetemplates">Build Resume</Link></a>
          </div>
        </div>
        <div className='images'>
          <img src={Rectangle59} alt="Rectangle59" className="imageTop" />
          <img src={Rectangle60} alt="Rectangle60" className="imageBg" />
        </div>
      </div>
    </section>
  )
}

export default Resume