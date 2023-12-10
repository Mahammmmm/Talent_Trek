// App.js (Main component to render two sections side by side)

import React from 'react';
import { Link } from 'react-router-dom';
import './UpdatePassword.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <div className="up-app-container">


      <div className="up-left-section">
      <div className='up-back_logo'>
      <a href='/'><Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="up-back-icon" /></Link></a>
            <div className="up-logo">Talent <span className='Brown'>Trek</span></div>
         </div>
         <div class="user-list">
            <Link to="/userprofile"><a href="#profile"  className='user-menu'>Profile</a></Link>
            <a href="#updatepassword" className='user-boldness'>Update Password</a>
            <Link to="/feedback"><a href="#feedback" className='user-menu'>Feedback</a></Link>
            <Link to="/complaintregistration"><a href="#feedback" className='user-menu'>Complaint Registration</a></Link>
            <Link to=""><a href="#chatboard" className='user-menu'>Chatboard</a></Link>
            <Link to="/login"><a href="#logout" className='user-menu'>Logout</a></Link>
          </div>
      
      <div className="user-footer">
        <p>&copy;  2023  TalentTrek</p>
        <p>talenttrek123@gmail.com</p>
      </div>
      </div>

      <div className="up-right-section">
        <h1 className='up-profile'>Update Password</h1>
        <div className="up-blur-container">
            <form className='upass-form'>
                <div className='upass-div'>
                    <label className='upass-label'>Current Password:</label>
                    <input
                    className='upass-input'
                        type="password"
                        id="currentPassword"
                    />
                </div>
                <div className='upass-div'>
                    <label className='upass-label'>New Password:</label>
                    <input
                    className='upass-input'
                        type="password"
                        id="newPassword"
                    />
                </div>
                <div className='upass-div'>
                    <label className='upass-label'>Confirm New Password:</label>
                    <input
                    className='upass-input'
                        type="password"
                        id="confirmPassword"
                    />
                </div>
                <button type="submit" className='upass-button'>Update Password</button>
            </form>   
        </div>
        
      </div>
    </div>
  );
};

export default App;
