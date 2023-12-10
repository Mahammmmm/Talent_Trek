// App.js (Main component to render two sections side by side)

import React from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <div className="feed-app-container">


    <div className="feed-left-section">
    <div className='feed-back_logo'>
    <a href='/'><Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="feed-back-icon" /></Link></a>
            <div className="feed-logo">Talent <span className='Brown'>Trek</span></div>
         </div>
         <div class="user-list">
            <Link to="/userprofile"><a href="#profile"  className='user-menu'>Profile</a></Link>
            <Link to="/updatepassword"><a href="#updatepassword" className='user-menu'>Update Password</a></Link>
            <a href="#feedback" className='user-boldness'>Feedback</a>
            <Link to="/complaintregistration"><a href="#feedback" className='user-menu'>Complaint Registration</a></Link>
            <Link to=""><a href="#chatboard" className='user-menu'>Chatboard</a></Link>
            <Link to="/login"><a href="#logout" className='user-menu'>Logout</a></Link>
          </div>
      
        <div className="feed-footer">
            <p>&copy;  2023  TalentTrek</p>
            <p>talenttrek123@gmail.com</p>
        </div>
    </div>

    <div className="feed-right-section">
        <div className="feed-blur-container">
            <div className='feed-left-sec'></div>
            <div className='feed-formstyle'>
                <form className='feed-form'>
                    <div className='feed-div'>
                        <label className='feed-label'>Name:</label>
                        <input
                        className='feed-input'
                            type="text"
                            id="name"
                        />
                    </div>
                    <div className='feed-div'>
                        <label className='feed-label'>Email:</label>
                        <input
                        className='feed-input'
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className='feed-div'>
                        <label className='feed-label'>Message:</label>
                        <textarea
                        className='feed-textarea'
                            id="message"
                        ></textarea>
                    </div>
                    <button type="submit" className='feed-button'>Submit Feedback</button>
                </form>
            </div>
              
        </div>
        
      </div>
    </div>
  );
};

export default App;
