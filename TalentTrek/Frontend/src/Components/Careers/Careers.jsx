import React from 'react'
import "./Careers.css"
import { Link } from 'react-router-dom';
import {Ellipse14,BooksImage1} from '../../assets/index-assets' 
const Careers = () => {
  return (
    <section id='Careers'>
      <div className="image-text-container">
      <h2 className='headingStyle'>Find a career that feels like a calling, where your passion meets purpose</h2>
      <div className="image-row">
        <a href="#" className="image-item">
          <div className="image-content">
            <img src={BooksImage1} alt="Image 1" />
            <p><Link to="/educationform">Career for Education and Personality</Link></p>
          </div>
        </a>
        <a href="#" className="image-item">
          <div className="image-content">
            <img src={Ellipse14} alt="Image 2" />
            <p><Link to="/q1">Career Perfect for your Personality</Link></p>
          </div>
        </a>
      </div>
    </div>
    </section>
      
  )
}

export default Careers