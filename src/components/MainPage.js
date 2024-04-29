import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { arrowNext, mjBGIcon, usMapBG } from '../images/images'


const MainPage = () => {
  return (
    <div className="main-page">
      <div className="map-container">
        <img src={usMapBG} alt="US Map" className="us-map" />
      </div>
      <div className="content">
        <h2>The history of cannabis is rooted in extensive{' '}
        <span className="italic times-new-roman">racism</span> and {' '}
        <span className="italic times-new-roman">xenophobia</span> in the US.</h2>
        <p>Latinx immigrants have been consistently{' '}
        <span className="light-green">persecuted</span> and{' '}
        <span className="light-green">demonized</span> through US cannabis laws and regulations....</p>
        <Link to="/learn-more" className="learn-more-btn">
            Learn More <img src={arrowNext} alt="Play" className="play-icon" />
        </Link>
      </div>
      <img src={mjBGIcon} alt="Bottom Left MJ Icon" className="marijuanaIcon" />
    </div>
  );
};

export default MainPage;