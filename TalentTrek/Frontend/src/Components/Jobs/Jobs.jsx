import React from 'react'
import "./Jobs.css"
import { Link } from 'react-router-dom';
import { Rectangle48 } from '../../assets/index-assets'
const Jobs = () => {
  return (
    <section id='Jobs' className='White'>

      <div className='wrapper'>

        <img src={Rectangle48} alt="Rectangle48" className="jobs-image" />
        
        <div class="circle">
          <div class="text">
            <p >
              Delivering the most up-to-date listings on job openings in Pakistan
            </p>
            
            <a href='#' className='heading'><Link to="/viewjobs">View Jobs</Link></a>
          </div>
        </div>
          
      </div>

    </section>
  )
}

export default Jobs