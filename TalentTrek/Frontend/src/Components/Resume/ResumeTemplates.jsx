import React from 'react';
import { Link } from 'react-router-dom';
import "./ResumeTemplates.css"
import {Brussels_Template,Athens_Template,UserIcon,twitter,facebookLogo,linkedIn,resumebg} from "../../assets/index-assets"
const Questionnaire = () => {
  return (
    <div>
        <div className='form_FirstContainer'>
            <h1 className='Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='UserImage'></img></Link>
            </a>
        </div>
        <div className='form_SecondContainer'>
        </div>
       

        <div className='Templates'>
          <div className='form_ThirdContainer'> 
              <p className='Text2'>RESUME TEMPLATES</p>
              <p className='Text3'>Create your resume in 5 minutes</p>
          </div>
          <div className='form_FourthContainer'>
            <div className='temp-image1'>
              <img src={Brussels_Template} alt='Brussels_Template' className='TemplateImg'></img>
              <button class="overlay-button"><Link to="/resumeform">Click Me</Link></button>
            </div>
            <div className='temp-image2'>
              <img src={Athens_Template} alt='Athens_Template' className='TemplateImg2'></img>
              <button class="overlay-button2"><Link to="/resumeform">Click Me</Link></button>
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