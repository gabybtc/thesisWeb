import React from 'react';
import './QuestionAnswer1.css';
import { worldIcon, weedPlant, WhiteNext } from '../../images/images'

const QuestionAnswer1 = ({ onNext }) => {
  return (
    <div>
    <div className="box-container">
      <div className="box-header">
        <span className = "headerHighlight">Let's see if you're correct...</span>
      </div>
      <div className='box-content'>
        <div className='firstTextBlock'>
      After the Mexican revolution in 1910, Mexican immigrants began entering the US through <a href="https://www.loc.gov/exhibits/mexican-revolution-and-the-united-states/us-involvement-before-1913.html" target="_blank" style={{ color: '#386B26' }}>towns such as El Paso and Laredo, Texas,</a> and some workers were found smoking marijuana after long days of work. This was the first time <span className='italic-times'>recreational</span> use of the drug was documented in the US.
      </div>
      <img src={worldIcon} alt="worldLogo" className="world-icon" />
      <div className='secondTextBlock'>
      Long before this, the Spanish had already brought cannabis into Mexico as an industrial fiber, and in the early 19th century, the US was already importing cannabis from India and using and selling it through pharmacies for medical use.
      </div>
      <img src={weedPlant} alt="weedPlantLogo" className="weedPlant-icon" />
      <div className='footer-text'>
        <div className='bottomHeader'>
        <span className='btmHighlight'>Why is this important?</span>
        </div>
        {' '}
        It was believed that all Mexican immigrants smoked this drug regularly and were the first to bring this “harmful”, “dangerous” and “foreign” substance into the United States. It is true that some immigrant workers were found to be using marijuana but the general population of Mexico were not using marijuana at all (this is what most people get wrong). It was this unfounded correlation between frequent recreational marijuana use and all latino immigrants that started the racist anti-immigrant beliefs in the US. Unfortunately, the United States used this emergence of recreational marijuana from a few Mexican immigrants as a way to push anti-immigrant sentiment and generalize the drug to the whole Mexican population.
      </div>
      </div>
    </div>
    <div>
      <button onClick={onNext} className='next-btn'>Next <img src={WhiteNext} alt="next" className="next-icon" /></button>
    </div>
    </div>
  );
};

export default QuestionAnswer1;