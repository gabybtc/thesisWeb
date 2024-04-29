import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress-indicator"></div>
      <div className="progress-indicator"></div>
      <div className="progress-indicator"></div>
      <div className="progress-indicator"></div>
    </div>
  );
};

export default ProgressBar;