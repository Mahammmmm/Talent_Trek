import React from 'react';
import "./ForgotPassword.css";
import {Graduation,} from '../../assets/index-assets'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const LoginPage = () => {
  
  return (
    <div className='login-container'>
      <div className='left-section'>
        
        <img src={Graduation} className='imageGrad' alt='Graduation' />
      </div>

      <div className='right-section'>
      
        <div className='login-form'>
          <h1>Forgot Password</h1>
          <form>
            
            <label htmlFor='password'>New Password <i className='fas fa-lock'></i></label>
            <input type='password' id='password' name='password' placeholder='Password' />

            <label htmlFor='password'>Confirm New Password <i className='fas fa-lock'></i></label>
            <input type='password' id='password' name='password' placeholder='Password' />

              <button type='submit' className='loginButton'>Set Password</button>
              
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
