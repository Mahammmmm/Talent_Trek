import React, { Component } from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { UserIcon } from '../../assets/index-assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  componentDidMount(){
    fetch("http://localhost:3000/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),
    })
    .then((res)=>res.json())
    .then((data=>{
      console.log(data,"userData");
    }));
  }
  render() {
    return (
      <div className="user-app-container">
        <div className="user-left-section">
          <div className="user-back_logo">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="user-back-icon" />
            </Link>
            <div className="user-logo">
              Talent <span className="user-Brown">Trek</span>
            </div>
          </div>

          <div class="user-list">
            <a href="#profile" className="user-boldness">
              Profile
            </a>
            <Link to="/updatepassword">
              <a href="#updatepassword" className="user-menu">
                Update Password
              </a>
            </Link>
            <Link to="/feedback">
              <a href="#feedback" className="user-menu">
                Feedback
              </a>
            </Link>
            <Link to="/complaintregistration">
              <a href="#comReg" className="user-menu">
                Complaint Registration
              </a>
            </Link>
            <Link to="">
              <a href="#chatboard" className="user-menu">
                Chatboard
              </a>
            </Link>
            <Link to="/login">
              <a href="#logout" className="user-menu">
                Logout
              </a>
            </Link>
          </div>

          <div className="user-footer">
            <p>&copy; 2023 TalentTrek</p>
            <p>talenttrek123@gmail.com</p>
          </div>
        </div>

        <div className="user-right-section">
          <h1 className="user-profile">My Profile</h1>
          <div className="user-blur-container">
            <div className="user-upper-section">
              <h2 className="user-us">User Details</h2>
            </div>
            <div className="user-lower-section">
              <div className="user-user-profile">
                <div className="user-user-image">
                  <img src={UserIcon} alt="User" />
                </div>
                <div className="user-divider"></div>
                <div className="user-user-details">
                  <h2 className="user-details"></h2>
                  <p className="user-details">
                    <span style={{ fontWeight: 'bolder' }}> Age:</span>{' '}
                  </p>
                  <p className="user-details">
                    <span style={{ fontWeight: 'bolder' }}> Email:</span>{' '}
                  </p>
                  <p className="user-details">
                    <span style={{ fontWeight: 'bolder' }}> DOB:</span>{' '}
                  </p>
                  <p className="user-details">
                    <span style={{ fontWeight: 'bolder' }}> Contact:</span>{' '}
                  </p>
                  <p className="user-details">
                    <span style={{ fontWeight: 'bolder' }}> City:</span>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
