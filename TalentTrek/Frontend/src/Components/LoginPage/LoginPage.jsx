import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Graduation } from '../../assets/index-assets';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, pass);
    
    fetch("http://localhost:3000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          navigate('/main2');
        }
      });
  };

  return (
    <div className='login-container'>
      <div className='left-section'>
        <img src={Graduation} className='imageGrad' alt='Graduation' />
      </div>

      <div className='right-section'>
        <div className='login-form'>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
              <i className='fas fa-user'>Email</i>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor='password'>
              <i className='fas fa-lock'>Password</i>
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              onChange={(e) => setPass(e.target.value)}
            />
            <a href='#' className='forgot-password'>
              <Link to='/forgetpassword'>Forgot Password?</Link>
            </a>
            <div className='form-bottom'>
              <button type='submit' className='loginButton'>
                Login
              </button>
              <div className='signup-text'>
                <p>
                  Don't have an account? <Link to='/signup'>Sign up here</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
