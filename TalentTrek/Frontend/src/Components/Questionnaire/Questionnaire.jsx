import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Questionnaire.css"
import {UserIcon,personalitytests,qstart1,twitter,facebookLogo,linkedIn} from "../../assets/index-assets"
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
            <div className='Qst-QuestionContainer'>
                
                <form onSubmit={handleSubmit} className='Qst-form'>
                    <p className='Qst-question'>1. Build a kitchen Cabinet</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>2. Study ways to
reduce water pollution</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>3. Write books or
plays</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>4. Teach children how
to read</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>5. Manage a retail
store
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>6. Load computer
software into a large
computer network
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>7. Repair household
appliances
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>8. Develop a new
medical treatment or
procedure</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>9. Play a musical
instrument</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>10. Work with
mentally disabled
children</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>11. Sell telephone and
other communication
equipment</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>12. Transfer funds
between banks using
a computer</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>13. Raise fish in a fish
hatcher</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>14. Diagnose and
treat sick animals</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>15. Perform comedy
routines in front of an
audience
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>16. Teach an
elementary school
class
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>17. Operate a beauty
salon or barber shop
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>18. Use a word
processor to edit and
format documents</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>19. Build a brick
walkway</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>20. Conduct chemical
experiments</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>21. Act in a movie</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>22. Supervise the
activities of children
at a camp</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>23. Run a toy store</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>24. Keep shipping and
receiving records</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>25. Drive a truck to
deliver packages to
offices and homes</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>26. Investigate crimes</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>27. Dance in a
Broadway show</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>28. Help people with
family-related
problems</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>29. Manage the
operations of a hotel
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>30. Type labels for
envelopes and
packages</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>31. Paint houses </p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>32. Study the
movement of planets
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>33. Draw pictures</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>34. Help elderly
people with their daily
activities</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>35. Sell houses </p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>36. Inventory supplies
using a hand-held
computer</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>37. Work on an
offshore oil-drilling rig
</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>38. Examine blood
samples using a
microscope</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>39. Conduct a musical
choir</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>40. Teach children
how to play sports</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>41. Sell refreshments
at a movie theater</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>42. Develop an office
filing system</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>43. Perform lawn care
services</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>44. Investigate the
cause of a fire</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>45. Act in a play</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>46. Teach sign language to people with
hearing disabilities</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>47. Start your own
business</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>48. Record rent
payments</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>49. Fix a broken
faucet</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>50. Develop psychological profiles of
criminals</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>51. Write scripts for
movies or television
shows</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>52. Help people who
have problems with
drugs or alcohol</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>53. Market a new line
of clothing</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>54. Enter information
into a database</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>55. Do cleaning or
maintenance work</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>56. Develop a way to
better predict the
weather</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>57. Direct a movie</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>58. Teach disabled
people work and living
skills</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>59. Sell merchandise
at a department store</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>60. Keep inventory
records</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>61. Set up and operate
machines to make
products</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>62. Do research on
plants or animals</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>63. Sing in a band</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>64. Take care of
children at a day-care
center</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>65. Sell automobiles</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>66. Maintain
employee records</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>67. Put out forest fires</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>68. Do laboratory tests
to identify diseases</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>69. Design artwork for
magazines</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>70. Teach a high
school class</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>71. Sell computer
equipment in a store</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    <p className='Qst-question'>72. Handle customers’
bank transactions</p>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            />Like</label>
                    </div>
                    <div className='Qst-OptionContainer'>
                        <label className='Qst-option'>
                            <input
                            className='Qst-input'
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            />Dislike</label>
                    </div>

                    



                    <div >
                    <button type="submit" className='Qst-Button'> <Link to="/qstend">SUBMIT</Link></button>
                    </div>
                </form>
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