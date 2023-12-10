import React from 'react'
import "./Institutes.css"
import { Link } from 'react-router-dom';
import { institutes_correct } from '../../assets/index-assets' 
const Intitutes = () => {
  return (
    <section id='Institutes'>
      <div className='background'>
        <div className="containerInstitutes">
          <img src={institutes_correct} alt="Rectangle53" className="image1" />

          <div class="circle2">
            <div class="text2">
              <p >Making it easier to find Institutes near you!</p>
              <a href='#' className='headingInstitutes'><Link to="/viewinstitutes">View Institutes</Link></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intitutes