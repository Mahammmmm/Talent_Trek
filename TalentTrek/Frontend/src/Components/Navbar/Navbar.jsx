import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <a href='#' className='logo'>
        Talent<span className='brown'>Trek</span>
      </a>

      <ul>
        <li>
          <a href='#' className="noUnderline"><Link to="/jobs">Jobs</Link></a>
        </li>

        <li>
          <a href='#' className="noUnderline"><Link to="/institutes">Institutes</Link></a>
        </li>

        <li>
          <a href='#' className="noUnderline"><Link to="/resume">Resume Builder</Link></a>
        </li>

        <li>
          <a href='#' className="noUnderline"><Link to="/career">Career Identification</Link></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar