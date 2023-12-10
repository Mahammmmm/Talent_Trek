import React, { Component } from 'react';
import { Graduation } from '../../assets/index-assets'; // Import your image
import "./SignUpPage.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      cPass: "",
      age: "",
      dob: "",
      contact: "",
      city: "",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {name,email,pass,cPass,age,dob,contact,city} = this.state;
    console.log(name,email,pass,cPass,age,dob,contact,city);

    fetch("http://localhost:3000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        name,
        email,
        pass,
        cPass,
        age,
        dob,
        contact,
        city,
      }),
    })
    .then((res)=>res.json())
    .then((data=>{
      console.log(data,"userRegister");
    })
    )
  }

  render() {
    return (
      <div className="signup-container">
        <div className="image-section">
          <img src={Graduation} alt="Graduation" className="imageGrad" />
        </div>
        <div className='right-section'>
          <div className="Signup-form-section">
            <h1> SignUp Form </h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" 
              onChange={(e)=>this.setState({name:e.target.value})} required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" 
              onChange={(e)=>this.setState({email:e.target.value})} required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" 
              onChange={(e)=>this.setState({pass:e.target.value})} required />

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={(e)=>this.setState({cPass:e.target.value})}
                required
              />

              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" 
              onChange={(e)=>this.setState({age:e.target.value})} required />

              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" 
              onChange={(e)=>this.setState({dob:e.target.value})} required />

              <label htmlFor="contact">Contact:</label>
              <input type="tel" id="contact" name="contact" 
              onChange={(e)=>this.setState({contact:e.target.value})} required />

            
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" 
              onChange={(e)=>this.setState({city:e.target.value})} required />

              <button type="submit" className='button'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
