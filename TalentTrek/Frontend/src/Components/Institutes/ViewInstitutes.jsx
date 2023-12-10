import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ViewInstitutes.css"
import {UserIcon,twitter,facebookLogo,linkedIn,institutes_correct} from "../../assets/index-assets"
const Questionnaire = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the selected option, like sending it to an API or updating state
        console.log('Selected Option:', selectedOption);
    };

  return (
    <div>
        <div className='Jobs-FirstContainer'>
            <h1 className='Jobs-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='Jobs-UserImage'></img></Link>
            </a>
        </div>

        <div className='Jobs-SecondContainer'>
            <h1 className='Jobs-Text1'>Only the educated are free</h1>
            <a href='#' >
                <img src={institutes_correct} alt='UserIcon' className='Jobs-QuestionmarkImage'></img>
            </a>
        </div>

        <div className='Jobs-ThirdContainer'> 
            <p className='Jobs-Text2'>INSTITUTES</p>
        </div>

        <div className='Jobs-footer'>
            <h1 className='Jobs-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <div className='Jobs-info'>
                <div>2023 TalentTrek</div>
                <div>talentTrek123@gmail.com</div>
            </div>
            <div className="Jobs-icons">
                <a href='#'><img src={facebookLogo} alt="Facebook" className='Jobs-fb'/></a>
                <a href='#'><img src={twitter} alt="Twitter" className='Jobs-twt'/></a>
                <a href='#'><img src={linkedIn} alt="LinkedIn" className='Jobs-lnkd'/></a>
            </div>
        </div>
        
        
    </div>   
  )
}

export default Questionnaire