import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./EducationForm.css"
import {UserIcon,twitter,facebookLogo,linkedIn,educationform,matric_inter,matric_inter2} from "../../assets/index-assets"
const Questionnaire = () => {
  

  return (
    <div className='overallbg'>
        <div className='Edu-FirstContainer'>
            <h1 className='Edu-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <a href='#' >
            <Link to="/userprofile"><img src={UserIcon} alt='UserIcon' className='Edu-UserImage'></img></Link>
            </a>
        </div>

        <div className='Edu-SecondContainer'>
            <h1 className='Edu-Text1'>we help you decide!</h1>
            <a href='#' >
                <img src={educationform} alt='UserIcon' className='Edu-QuestionmarkImage'></img>
            </a>
        </div>

        <div className='Edu-ThirdContainer'> 
            <p className='Edu-Text2'>Provide us your educational details!</p>
        </div>

        <div className="Edu-blur-container1">
            <div className="Edu-upper-section1">
                <h2 className='Edu-us1'>MATRIC</h2>
            </div>
            <div className="Edu-lower-section1">
                <div class="form-container1">
                    <form className='edu-form'>
                        <label for="options">Major:</label>
                        <select id="options" name="options" >
                        <option value="option1">Biology</option>
                        <option value="option2">Computer Science</option>
                        </select>

                        <label>Select Subjects:</label>
                        <div className='checkbov-div'>
                        <label><input type="checkbox" name="math" value="math" className='subjects'/> Physics</label>
                        <label><input type="checkbox" name="math" value="math" className='subjects'/> Chemistry</label>
                        <label><input type="checkbox" name="math" value="math" className='subjects'/> Mathematics</label>
                        <label><input type="checkbox" name="math" value="math" className='subjects'/> English</label>
                        <label><input type="checkbox" name="math" value="math" className='subjects'/> Urdu</label>
                        <label><input type="checkbox" name="math" value="math" className='subjects'/> Islamiyat</label>
                        <label><input type="checkbox" name="science" value="science" className='subjects'/> Pak Studies</label>
                        <label><input type="checkbox" name="history" value="history" className='subjects'/> Ethics</label>
                        <label><input type="checkbox" name="english" value="english" className='subjects'/> Computer Science</label>
                        <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Biology</label>
                        </div>

                        <label for="totalMarks">Total Marks:</label>
                        <select id="options" name="options" >
                        <option value="option1">1100</option>
                        <option value="option2">1050</option>
                        </select>

                        <label for="textInput">Obtained Marks:</label>
                        <input type="text" id="textInput" name="textInput"  className='matric-input'/>

                        <label for="textInput">Board Name:</label>
                        <input type="text" id="textInput" name="textInput"  className='matric-input'/>
   
                    </form>
                </div>
                <div class="image-container1">
                    <img src={matric_inter} alt="Image Description" className='matric'/>
                </div>
            </div>   
        </div>

        <div className="Edu-blur-container2">
            <div className="Edu-upper-section2">
                <h2 className='Edu-us2'>INTERMEDIATE</h2>
            </div>
            <div className="Edu-lower-section2">
                <div class="image-container2">
                    <img src={matric_inter2} alt="Image Description" className='intermediate'/>
                </div>
                <div class="form-container2">
                    <form className='edu-form'>
                            <label for="options">Major:</label>
                            <select id="options" name="options" >
                                <option value="option1">Pre-Engineering</option>
                                <option value="option1">Pre-Medical</option>
                                <option value="option1">FA</option>
                                <option value="option1">ICS</option>
                                <option value="option2">ICOM</option>
                            </select>

                            <label>Select Subjects:</label>
                            <div className='checkbov-div'>
                            <label><input type="checkbox" name="math" value="math" className='subjects'/> Physics</label>
                            <label><input type="checkbox" name="math" value="math" className='subjects'/> Chemistry</label>
                            <label><input type="checkbox" name="math" value="math" className='subjects'/> Mathematics</label>
                            <label><input type="checkbox" name="math" value="math" className='subjects'/> English</label>
                            <label><input type="checkbox" name="math" value="math" className='subjects'/> Urdu</label>
                            <label><input type="checkbox" name="math" value="math" className='subjects'/> Islamiyat</label>
                            <label><input type="checkbox" name="science" value="science" className='subjects'/> Pak Studies</label>
                            <label><input type="checkbox" name="history" value="history" className='subjects'/> Ethics</label>
                            <label><input type="checkbox" name="english" value="english" className='subjects'/> Computer Science</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Biology</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Statistics</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Geography</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> English Literature</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Arabic</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Advance Urdu</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> French</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Persian</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Philosophy</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Civics</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Fine Arts</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Education</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Economics</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Accounting</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Business Math</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Commerce</label>
                            <label><input type="checkbox" name="programming" value="programming" className='subjects'/> Banking</label>
                            </div>

                            <label for="totalMarks">Total Marks:</label>
                            <select id="options" name="options" >
                            <option value="option1">1100</option>
                            <option value="option2">1050</option>
                            </select>

                            <label for="textInput">Obtained Marks:</label>
                            <input type="text" id="textInput" name="textInput"  className='matric-input'/>

                            <label for="textInput">Board Name:</label>
                            <input type="text" id="textInput" name="textInput"  className='matric-input'/>
    
                    </form>
                </div>
                
            </div>
            
        </div>

        <Link to="/q1"><button type="button" className='eduForm-Button'>Submit</button></Link>

        <div className='Edu-footer'>
            <h1 className='Edu-Heading'>Talent<span className='Brown'>Trek</span></h1>
            <div className='Edu-info'>
                <div>2023 TalentTrek</div>
                <div>talentTrek123@gmail.com</div>
            </div>
            <div className="Edu-icons">
                <a href='#'><img src={facebookLogo} alt="Facebook" className='Edu-fb'/></a>
                <a href='#'><img src={twitter} alt="Twitter" className='Edu-twt'/></a>
                <a href='#'><img src={linkedIn} alt="LinkedIn" className='Edu-lnkd'/></a>
            </div>
        </div>
        
        
    </div>   
  )
}

export default Questionnaire