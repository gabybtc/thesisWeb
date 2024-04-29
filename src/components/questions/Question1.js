import React, { useState } from 'react';
import Map from '../elements/Map'
import CirclesChoice from '../elements/CirclesChoice';
import { location } from '../../images/images'
import'./Question1.css';
//fix and add progress bar when states made

const Question1 = ({ onCircleClick }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [moved, setMoved] = useState(false);
  const [newText, setNewText] = useState('');
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleStateClicked = (data) => {
    setShowHeader(false); // Hide the header
    setNewText(data); // Set the new text
    handleMove()
    setTimeout(() => {
      setNewText(''); // Clear the new text
      setShowNewComponent(true); // Show the new component
    }, 1500); // 1.5 seconds
  };

  const handleMove = () => {
    setMoved(true);
  };

  const handleData = (country) => {
    // Pass the data received from the child component to the parent component
    onCircleClick(country);
  };

  return (
    <div>
    <div className={`new-text ${!showHeader ? 'show' : ''} ${showNewComponent ? 'fade-out' : ''}`}>
          <img src={location} alt="locationLogo" className="locatIcon" />
          <p className='text'>{newText}</p>
      </div>
      <div className={`circlesChoice ${showNewComponent ? 'show' : ''}`}>
        {showNewComponent && <CirclesChoice onCircleClick= {handleData} />}
      </div>
      <div className="question">
      <h2 className={`h2 ${showHeader ? '' : 'hide'}`}>Where do you think 
      <span className = "highlight">cannabis</span>
      was first used recreationally in the US?</h2>
      <div className={`mapStyle ${moved ? 'move-left' : ''}`}>
        <Map onStateClick={handleStateClicked}/>
      </div>
      </div>
    </div>
  );
};

export default Question1;