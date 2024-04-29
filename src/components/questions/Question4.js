import React, { useState } from 'react';
import './Question4.css';
import CircularSlider from '../elements/CircularSlider';

const Question4 = ({ getAnswer }) => {

    return (
        <div className="question4">
        <text className='headerQ4'>Not too long ago (in 2013), what percentage of White vs. Black & Latino people do you think were incarcerated in US federal prisons for drug offenses?</text>
        <div>
        <CircularSlider/>
        </div>
      <button onClick={ getAnswer } className='iscorrect-btn'>Is this correct?</button>
      </div>
    );
};

export default Question4;