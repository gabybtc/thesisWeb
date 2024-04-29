import React from 'react';
import './QuestionAnswer3.css';
import ImageSlider from '../elements/ImageSlider';
import { WhiteNext, racistArticle, reeferMadness, rootsInHellPoster } from '../../images/images'

const QuestionAnswer3 = ({ onNext }) => {

    const images = [
        reeferMadness,
        rootsInHellPoster,
      ];

  return (
    <div>
    <div className="box-container">
      <div className="box-headerQ3">
        <div className='subTitle3'>
        Many of the words we continue to associate with cannabis today come from years of <span className='subTitlehighlight'>prejudice</span> and <span className='subTitlehighlight'>xenophobia</span>.
        </div>
      </div>
      <div className='box-content3'>
        <div className='textBlockOneQ3'>
        The media propaganda that took hold during the 20th century still impacts the way cannabis and its association with immigrants are viewed today.
      </div>
      <img src={racistArticle} alt="article-2" className="racist-article-img" />
      <div className='textBlockTwoQ3'>
      This was included in U.S. Narcotics Commissioner Harry Anslinger's<br /> testimony before Congress in 1937:
      </div>
      <div className='quoteContainer'>
        <div className='quoteText'>
        "That's why our problem is so great; the greatest percentage of our population is composed of  <span style={{ color: '#71B659' }}>Spanish-speaking persons</span>, most of who are low mentally, because of social and racial conditions"
        </div>
      </div>
    </div>
    <div className='sliderImages'>
        <ImageSlider images={images} />
    </div>
    </div>
    <button onClick={onNext} className='next-btn'>Next <img src={WhiteNext} alt="next" className="next-icon" /></button>
    </div>
  );
};

export default QuestionAnswer3;