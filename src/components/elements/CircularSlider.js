import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularSlider = () => {
  const [whitePercentage, setWhitePercentage] = useState(100);
  const [blackAndLatinoPercentage, setBlackAndLatinoPercentage] = useState(0);

  const handleWhitePercentageChange = (event) => {
    const newValue = Math.max(0, Math.min(100, parseInt(event.target.value, 10)));
    setWhitePercentage(newValue);
    setBlackAndLatinoPercentage(100 - newValue);
  };

  const handleBlackAndLatinoPercentageChange = (event) => {
    const newValue = Math.max(0, Math.min(100, parseInt(event.target.value, 10)));
    setBlackAndLatinoPercentage(newValue);
    setWhitePercentage(100 - newValue);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', marginTop: '2%'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '8%' }}>
        <CircularProgressbar
          value={whitePercentage}
          text={`${whitePercentage}%`}
          styles={buildStyles({
            pathColor: '#386B26',
            textColor: '#386B26',
            trailColor: 'transparent',
          })}
        />
          <span style={{ fontSize: '1em', fontFamily: 'Helvetica', fontWeight: 'bold', marginTop: '5%', color: '#386B26' }}>White</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '8%'  }}>
        <CircularProgressbar
          value={blackAndLatinoPercentage}
          text={`${blackAndLatinoPercentage}%`}
          styles={buildStyles({
            pathColor: '#5E964A',
            textColor: '#5E964A',
            trailColor: 'transparent',
          })}
        />
        <span style={{ fontSize: '1em', fontFamily: 'Helvetica', fontWeight: 'bold', marginTop: '5%', color: '#5E964A'}}>Black & Latino</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', marginTop: '-20%'}}>
      <div style={{ marginRight: '18%'}}>
      <input
        type="range"
        min="0"
        max="100"
        value={whitePercentage}
        onChange={handleWhitePercentageChange}
        style={{
          accentColor: '#386B26',
        }}
      />
      </div>
      <div style={{ marginLeft: '18%'}}>
      <input
        type="range"
        min="0"
        max="100"
        value={blackAndLatinoPercentage}
        onChange={handleBlackAndLatinoPercentageChange}
        style={{
          accentColor: '#5E964A',
        }}
      />
      </div>
      </div>
    </div>
  );
};

export default CircularSlider;