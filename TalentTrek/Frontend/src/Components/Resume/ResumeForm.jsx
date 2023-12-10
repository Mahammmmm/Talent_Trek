import React from 'react';
import { Link } from 'react-router-dom';
import "./ResumeForm.css"
import {Brussels_Template,Athens_Template,UserIcon,twitter,facebookLogo,linkedIn,resumebg} from "../../assets/index-assets"
const Questionnaire = () => {
  return (
    <div>
        <div className='Resume_FirstContainer'>
            <h1 className='Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='UserImage'></img></Link>
            </a>
        </div>
        <div className='Resume_SecondContainer'>
        </div>
       

        <div className='Templates'>
           <div className='Resume_ThirdContainer'> 
              <p className='Text2'>PROVIDE DETAILS</p>
              <p className='Text3'>Create your resume in 5 minutes</p>
           </div>
           <div className='Resume_FourthContainer'>
               <div className="Resume-form-section">
                    
                        <p className='heading2'> Resume Form</p>
                        <div class="input-container"></div>
                    <form >
                            <h2>Personal Details</h2>
                            <div className='sideBYside'>  
                                <div className='col'>
                                <label htmlFor="name">First Name:</label>
                                <input type="text" id="name" name="name"  required /></div>

                                <div className='col'>
                                <label htmlFor="name">Last Name:</label>
                                <input type="text" id="name" name="name"  required /></div>
                            </div> 
                            <div className='sideBYside'>
                                <div className='col'>
                                <label htmlFor="jobtitle">Job Title:</label>
                                <input type="text" id="jobtitle" name="jobtitle"  required /></div>

                                <div className='col'>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email"  required /></div>
                            </div>
                            <div className='sideBYside'>
                                <div className='col'>
                                <label htmlFor="phone">Phone:</label>
                                <input type="text" id="phone" name="phone"  required /></div>

                                <div className='col'>
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" name="address"  required /></div>
                            </div>
                            <div class="input-container"></div>

                            <h2 >Profile</h2>
                            <h6 className='heading3'>Write about your profile</h6>
                            <textarea type="text" id="profile" name="profile"  className='resume-textarea' required />
                            <div class="input-container"></div>

                            <h2 >Professional Summary</h2>
                            <h6 className='heading3'>Provide details about your experiences</h6>
                            <textarea type="text" id="experience" name="experience" className='resume-textarea' required />
                            <div class="input-container"></div>

                            

                            <h2 >Education</h2>
                            <h6 className='heading3'>Provide details about your education</h6>
                            <textarea type="text" id="experience" name="experience" className='resume-textarea' required />
                            <div class="input-container"></div>

                            <h2 >Skills</h2>
                            <textarea type="text" id="experience" name="experience" className='resume-textarea'  required />
                            <div class="input-container"></div>

                            <button type="submit" className='button'>Submit Details</button>
                    </form>
                </div>
           </div>
           
        </div>
        
        <div className='footer'>
            <h1 className='Heading'>Talent<span className='Brown'>Trek</span></h1>
            <div className='info'>
                <div>2023 TalentTrek</div>
                <div>talentTrek123@gmail.com</div>
            </div>
            <div className="icons">
                <a href='#'><img src={facebookLogo} alt="Facebook" className='fb'/></a>
                <a href='#'><img src={twitter} alt="Twitter" className='twt'/></a>
                <a href='#'><img src={linkedIn} alt="LinkedIn" className='lnkd'/></a>
            </div>
        </div>
        
        
    </div>   
  )
}

export default Questionnaire