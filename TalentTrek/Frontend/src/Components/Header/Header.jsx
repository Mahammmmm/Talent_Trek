import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"
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
          <a href='#' className='LoginButton'><Link to="/login">Login</Link></a>
          <p className='headerParagraph'>
          Welcome to TalentTrek!Your guide to unlocking your potential and pursuing your dream career
          </p>
          
        </div>
      </div>
    </header>
  )
}

export default Header