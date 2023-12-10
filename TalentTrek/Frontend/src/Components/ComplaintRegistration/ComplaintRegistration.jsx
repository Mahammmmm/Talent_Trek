// App.js (Main component to render two sections side by side)

import React from 'react';
import { Link } from 'react-router-dom';
import './ComplaintRegistration.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="complaint-app-container">


    <div className="complaint-left-section">
         <div className='complaint-back_logo'>
         <a href='/'><Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="complaint-back-icon" /></Link></a>
            <div className="complaint-logo">Talent <span className='Brown'>Trek</span></div>
         </div>
        
        
         <div class="user-list">
            <Link to="/userprofile"><a href="#profile"  className='user-menu'>Profile</a></Link>
            <Link to="/updatepassword"><a href="#updatepassword" className='user-menu'>Update Password</a></Link>
            <Link to="/feedback"><a href="#feedback" className='user-menu' >Feedback</a></Link>
            <a href="#feedback"className='user-boldness' >Complaint Registration</a>
            <Link to=""><a href="#chatboard" className='user-menu'>Chatboard</a></Link>
            <Link to="/login"><a href="#logout" className='user-menu'>Logout</a></Link>
          </div>
      
        <div className="complaint-footer">
            <p>&copy;  2023  TalentTrek</p>
            <p>talenttrek123@gmail.com</p>
        </div>
    </div>

    <div className="complaint-right-section">
        <div className="complaint-blur-container">
            <div className='complaint-left-sec'></div>
            <div className='complaint-formstyle'>
                <form className='complaint-form'>
                    <div className='complaint-div'>
                        <label className='complaint-label'>Name:</label>
                        <input
                        className='complaint-input'
                            type="text"
                            id="name"
                        />
                    </div>
                    <div className='complaint-div'>
                        <label className='complaint-label'>Email:</label>
                        <input
                        className='complaint-input'
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className='complaint-div'>
                        <label className='complaint-label'>Complaint:</label>
                        <textarea
                        className='complaint-textarea'
                            id="message"
                        ></textarea>
                    </div>
                    <button type="submit" className='complaint-button'>Submit Complaint</button>
                </form>
            </div>
              
        </div>
        
      </div>
    </div>
  );
};

export default App;
