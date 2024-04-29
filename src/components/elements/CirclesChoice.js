import React, { useState } from 'react';
import './CirclesChoice.css';

const CirclesChoice = ({ onCircleClick }) => {
    const [activeCircles, setActiveCircles] = useState(Array(6).fill(false));
    const emojis = ['🇲🇽', '󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇺🇸', '🇵🇷', '🇨🇳', '🇨🇺']; // Array of emojis
    const tooltips = ['Mexico', 'England', 'USA', 'Puerto Rico', 'China', 'Cuba'];

  const handleCircleClick = (index) => {
    setActiveCircles((prevActiveCircles) => {
      const updatedActiveCircles = [...prevActiveCircles];
      updatedActiveCircles[index] = !updatedActiveCircles[index];
      return updatedActiveCircles;
    });

    onCircleClick(tooltips[index]); // Passes name of country chosen
  };

  const calculateCirclePosition = (index) => {
    const angle = (index / 6) * Math.PI * 2; // Calculate angle
    const radius = 90; // Set the radius of the circle
    const centerX = 150; // X-coordinate of the center of the cluster
    const centerY = 150; // Y-coordinate of the center of the cluster
    const x = centerX + Math.cos(angle) * radius; // Calculate X-coordinate
    const y = centerY + Math.sin(angle) * radius; // Calculate Y-coordinate
    return { left: x, top: y }; // Return the position
  };


  return (
    <div className="circle-container">
    <h2 className = "byWhomText">By <span className="italic-times">whom?</span></h2>
    <div className="circle-group">
      {activeCircles.map((isActive, index) => (
        <div
          key={index}
          className={`circleCh ${isActive ? 'active' : ''}`}
          onClick={() => handleCircleClick(index)}
          style={{ ...calculateCirclePosition(index) }}
          title={tooltips[index]}
        >
        <span role="img" aria-label="emoji">{emojis[index]}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CirclesChoice;
