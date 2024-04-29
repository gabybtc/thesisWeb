import React from 'react';
import './QuestionAnswer2.css';
import { WhiteNext, MJLawIcon, arrowIcon, articleImage } from '../../images/images';

const QuestionAnswer2 = ({ onNext }) => {
  return (
    <div>
    <div className="box-container">
      <div className="box-headerQ2">
        <div className='titleText'>
        <span className = "headerHighlight">Not quite...</span>
        </div>
        <div className='subTitle'>
        <span className = "subTitleHighlight">
        But don't worry! Many people get this wrong
        </span>
        </div>
      </div>
      <div className='box-content'>
        <div className='textBlockOneQ2'>
        Because of the “lower status” and societal preconceptions of brown people (including Mexican immigrants) the United States law enforcement pushed this idea that all Mexican immigrants smoked cannabis regularly and that all of Mexico had a very tolerant attitude towards marijuana.
      </div>
      <img src={MJLawIcon} alt="MJLawIcon" className="MJLaw-icon" />
      <div className='secondLine'>
      <div className='secondTextBlockQ2'>
      This is <span style={{ color: '#71B659' }}>untrue.</span>
      </div>
      <img src={arrowIcon} alt="arrow" className="arrow-icon" />
      </div>
      <div className='footer-text-2'>
      <img src={articleImage} alt="article-pic" className="article-img" />
      <div className='footer-text-pt1'>
      In fact, marijuana had a bad reputation in Mexico before it was demonized in the US. It was banned in Mexico in 1920 and looked down upon as a recreational drug despite the assumption that marijuana was as conventional to the Mexican population as alcohol.
      <br />
      {' '}
      <br />
      This false assumption is known as the “Mexican Hypothesis” and was falsely promoted and encouraged by many American scholars.
      </div>
      </div>
      <div className= 'imgAnnot'>
      Article from The Ogden Standard from September 1915<br /> - University of Utah/Marriott Library
      </div>
      </div>
    </div>
    <div>
      <button onClick={onNext} className='next-btn'>Next <img src={WhiteNext} alt="next" className="next-icon" /></button>
    </div>
    </div>
  );
};

export default QuestionAnswer2;