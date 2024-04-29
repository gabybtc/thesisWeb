import React, { useState } from 'react';
import './Question2.css';
import ColorSlider from '../elements/Slider';
import { usaPerson, mexicoPerson, prohibition, proMJ } from '../../images/images'

const Question2 = ({ getAnswer }) => {
    const [mexicoSliderValue, setMexicoSliderValue] = useState(50);
    const [americanSliderValue, setAmericanSliderValue] = useState(50);
    const [showButton, setShowButton] = useState(false);

    // Functional component for rendering SVG images
    const SvgImage = ({ src, alt }) => (
        <img src={src} alt={alt} />
    );

    const handleMexicoSliderChange = (newValue) => {
        setMexicoSliderValue(newValue);
        setShowButton(true);
      };
    
      const handleAmericanSliderChange = (newValue) => {
        setAmericanSliderValue(newValue);
        setShowButton(true);
        console.log(newValue);
      };

    return (
        <div className='question2'>
            <h2>In the 20th century, which group viewed cannabis in a 
            <span className = "highlight2-1">positive</span>
            light vs who 
            <span className = "highlight2-2">banned</span>
            it and demonized the drug?</h2>
        <div className= "interactive-part">
        <div className='person-container'>
            <div className='person-icon'>
            <SvgImage src={mexicoPerson} alt="Mexican Person" />
            </div>
            <div className='person-icon'>
            <SvgImage src={usaPerson} alt="American Person" />
            </div>
        </div>
        <div className='slider-container'>
            <div className='slider-group'>
            <SvgImage src={prohibition} alt="Prohibition Icon" />
            <ColorSlider onValueChange={handleMexicoSliderChange} />
            <SvgImage src={proMJ} alt="Cannabis Icon" />
            </div>
            <div className='slider-group'>
            <SvgImage src={prohibition} alt="Prohibition Icon" />
            <ColorSlider onValueChange={handleAmericanSliderChange}/>
            <SvgImage src={proMJ} alt="Cannabis Icon" />
            </div>
        </div>
        </div>
        <div className={`btnCont ${showButton ? 'fade-in' : ''}`}>
        {showButton && <button onClick={ getAnswer } className='check-btn'>Am I correct?</button>}
        </div>
        </div>
    );
};

export default Question2;