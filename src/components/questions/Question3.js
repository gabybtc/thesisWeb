import React, { useState } from 'react';
import './Question3.css';
import { dangerIcon, funIcon, maniaIcon, addictionIcon, crimeIcon, lowincomeIcon, medicinalIcon, smuggleIcon, relaxingIcon, prisonIcon, illegalIcon, crazyIcon } from '../../images/images'

const Question3 = ({ getAnswer }) => {

    const words = [
        { label: 'Danger', icon: dangerIcon },
        { label: 'Fun', icon: funIcon },
        { label: 'Mania', icon: maniaIcon },
        { label: 'Addiction', icon: addictionIcon },
        { label: 'Crime', icon: crimeIcon },
        { label: 'Low-Income', icon: lowincomeIcon },
        { label: 'Medicinal', icon: medicinalIcon },
        { label: 'Smuggle', icon: smuggleIcon },
        { label: 'Relaxing', icon: relaxingIcon },
        { label: 'Prison', icon: prisonIcon },
        { label: 'Illegal', icon: illegalIcon },
        { label: 'Crazy', icon: crazyIcon },
      ];

      const handleWordClick = (index) => {
        const buttons = document.getElementsByClassName('word-button');
        buttons[index].classList.toggle('clicked');
      };

    return (
        <div className="question3">
        <text className='headerQ3'>What words do you associate with cannabis?</text>
        <p className='subheaderQ3'>(Choose any 2-3)</p>
        <div className="word-buttons">
        {words.map((word, index) => (
          <button
          key={index}
          className="word-button"
          onClick={() => handleWordClick(index)}
        >
          <img src={word.icon} alt={word.label} className="word-icon" />
          {word.label}
        </button>
        ))}
      </div>
      <button onClick={ getAnswer } className='why-btn'>Why are these words linked to cannabis?</button>
      </div>
    );
};

export default Question3;