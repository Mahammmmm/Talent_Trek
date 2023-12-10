import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar2"

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar/>
        
        <div className='headerText'>

          <p className='slogan'>
            If opportunity doesn't knock, 
            build a door
          </p>
          <p className='headerParagraph'>
          Welcome to TalentTrek!Your guide to unlocking your potential and pursuing your dream career
          </p>
          
        </div>
      </div>
    </header>
  )
}

export default Header