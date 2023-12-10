

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ViewJobs.css"
import {UserIcon,twitter,facebookLogo,linkedIn,Rectangle48} from "../../assets/index-assets"
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
        <div className='Inst-FirstContainer'>
            <h1 className='Inst-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='Inst-UserImage'></img></Link>
            </a>
        </div>

        <div className='Inst-SecondContainer'>
            <h1 className='Inst-Text1'> Your Future Is Secure</h1>
            <a href='#' >
                <img src={Rectangle48} alt='UserIcon' className='Inst-QuestionmarkImage'></img>
            </a>
        </div>

        <div className='Inst-ThirdContainer'> 
            <p className='Inst-Text2'>Making Sure You Get <span className='Brown'>Hired</span> By The Best Company</p>
        </div>

        <div className='Inst-footer'>
            <h1 className='Inst-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <div className='Inst-info'>
                <div>2023 TalentTrek</div>
                <div>talentTrek123@gmail.com</div>
            </div>
            <div className="Inst-icons">
                <a href='#'><img src={facebookLogo} alt="Facebook" className='Inst-fb'/></a>
                <a href='#'><img src={twitter} alt="Twitter" className='Inst-twt'/></a>
                <a href='#'><img src={linkedIn} alt="LinkedIn" className='Inst-lnkd'/></a>
            </div>
        </div>
        
        
    </div>   
  )
}

export default Questionnaire