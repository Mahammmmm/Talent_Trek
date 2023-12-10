import React from 'react';
import { Link } from 'react-router-dom';
import "./QuestionnaireResults.css"
import {UserIcon,twitter,facebookLogo,linkedIn,questionnaireresults} from "../../assets/index-assets"

const Questionnaire = () => {
  return (
    <div>
        <div className='QsrRst-FirstContainer'>
            <h1 className='QsrRst-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='QsrRst-UserImage'></img></Link>
            </a>
        </div>

        <img src={questionnaireresults} alt='questionnaireresults' className='QsrRst-ResultImg'></img>


        <div className='QsrRst-ThirdContainer'> 
            <p className='QsrRst-Text2'>Your Personality</p>
            <p className='QsrRst-Text3'>Based on your responses, here is your personality</p>
        </div>

        
        <div className='QsrRst-footer'>
            <h1 className='QsrRst-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <div className='QsrRst-info'>
                <div>2023 TalentTrek</div>
                <div>talentTrek123@gmail.com</div>
            </div>
            <div className="QsrRst-icons">
                <a href='#'><img src={facebookLogo} alt="Facebook" className='QsrRst-fb'/></a>
                <a href='#'><img src={twitter} alt="Twitter" className='QsrRst-twt'/></a>
                <a href='#'><img src={linkedIn} alt="LinkedIn" className='QsrRst-lnkd'/></a>
            </div>
        </div>
        
        
    </div>   
  )
}

export default Questionnaire