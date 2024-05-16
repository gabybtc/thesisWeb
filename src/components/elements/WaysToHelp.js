import React, { useState } from 'react';
import './WaysToHelp.css';
import { store, whiteHouse, educate, goNextImg, goBackImg } from '../../images/images';

const WaysToHelp = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const listItems = [
    'Re-investing tax money in minority communities targeted in the failed war on drugs', 
    'Ensuring that those disproportionately affected by cannabis criminalization have access to the new economic opportunities now presented by reform'
  ];

  const textContent = [
    <div>
    <div className='miniBox-title'>
        <span className='miniBox-title-highlight'>Educate Yourself</span>
    </div>
    <div className='miniBox-text'>
    Knowing the racist history behind this drug is the first step to helping change unfair legislation and fix our warped perceptions of marijuana.
    <img src={ educate } alt='' className='educateIcon'/>
    </div>
    <div className='miniBox-text' style={{ color: '#293F1D' }}>
    Start making active choices about where you purchase any cannabis that you consume. Seek out businesses lead by people of color and people who have been affected negatively by cannabis legislation in the past.
    </div>
    </div>
    ,
    <div>
    <div className='miniBox-title' style={{ marginLeft: '-22%' }}>
        <span className='miniBox-title-highlight'>Push for Federal Legalization</span>
    </div>
    <div className='miniBox-text'>
    Making cannabis legal at the federal level can lead us to finally move past the war on drugs and even help fix unjust and incorrect societal views on latin immigrants. It is the best way to attempt to fix the damage that has been done by past cannabis legislation.
    </div>
    <div className='miniBox-text' style={{ color: '#293F1D', fontWeight: 'bold', marginTop: '0.5%'}}>
    Some things that this federal legalization should include are:
    </div>
    <div className='miniBox-text' style={{ marginTop: '-3.5%', fontSize: '13px', color: '#293F1D'}}>
    <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
    </div>
  ];
  const images = [store, whiteHouse];

  const handlePrev = () => {
    setCurrentStep((prevStep) => (prevStep === 0 ? textContent.length - 1 : prevStep - 1));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep === textContent.length - 1 ? 0 : prevStep + 1));
  };

  return (
    <div className='toHelp-box'>
        <div className='toHelp-title'>
            <span className='toHelp-Highlight'>Ways To Help</span>
        </div>
    <div className='textExpl-box'>
        {textContent[currentStep]}
    </div>
      <div className='sideImgContainer'>
        <img src= {images[currentStep]} alt="svg-toHelp" className='sideImg'/>
    </div>
      <span className="WTH-prevButton" onClick={handlePrev}>
      <img src={goBackImg}/>
     </span>
     <span className="WTH-nextButton" onClick={handleNext}>
      <img src={goNextImg}/>
    </span>
    </div>
  );
};

export default WaysToHelp;