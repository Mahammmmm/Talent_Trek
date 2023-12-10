import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Questionnaire.css"
import {UserIcon,personalitytests,qend,twitter,facebookLogo,linkedIn} from "../../assets/index-assets"
const Questionnaire = () => {
   
  return (
    <div>
        <div className='Qst-FirstContainer'>
            <h1 className='Qst-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='Qst-UserImage'></img></Link>
            </a>
        </div>

        <div className='Qst-SecondContainer'>
            <h1 className='Qst-Text1'>WHAT'S BEST FOR YOU</h1>
            <a href='#' >
                <img src={personalitytests} alt='UserIcon' className='Qst-QuestionmarkImage'></img>
            </a>
        </div>

        <div className='Qst-ThirdContainer'> 
            <p className='Qst-Text2'>Career Questionnaire</p>
            <p className='Qst-Text3'>Get to know your career in 5 minutes</p>
        </div>

        <div className='Qst-FourthContainer'>
            <img src={qend} alt='qend' className='Qst-qstart'></img>
            <div className='Qst-QuestionContainer'>
                <p className='Qst-Text4'>You have completed the questionnaire.....</p>
                <div className='Qst-Button'>
                <Link to="/qstrslt"><button type="submit">View Results</button></Link>
                </div>
            </div>
        </div>
        <div className='Qst-footer'>
            <h1 className='Qst-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <div className='Qst-info'>
                <div>2023 TalentTrek</div>
                <div>talentTrek123@gmail.com</div>
            </div>
            <div className="Qst-icons">
                <a href='#'><img src={facebookLogo} alt="Facebook" className='Qst-fb'/></a>
                <a href='#'><img src={twitter} alt="Twitter" className='Qst-twt'/></a>
                <a href='#'><img src={linkedIn} alt="LinkedIn" className='Qst-lnkd'/></a>
            </div>
        </div>
        
        
    </div>   
  )
}

export default Questionnaire