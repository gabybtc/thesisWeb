import React from 'react';
import './QuestionAnswer1.css';
import { worldIcon, weedPlant, WhiteNext } from '../../images/images'

const QuestionAnswer1 = ({ onNext }) => {
  return (
    <div>
    <div className="box-container">
      <div className="box-header">
        <span className = "headerHighlight">You're correct!</span>
      </div>
      <div className='box-content'>
        <div className='firstTextBlock'>
      After the Mexican revolution in 1910, Mexican immigrants began entering the US through El Paso, Texas and first introduced the use of marijuana as a <span className='italic-times'>recreational</span> drug.
      </div>
      <img src={worldIcon} alt="worldLogo" className="world-icon" />
      <div className='secondTextBlock'>
      Long before this, the Spanish had already brought cannabis into Mexico as an industrial fiber, and in the early 19th century, the US was already importing cannabis from India and using and selling it through pharmacies.
      </div>
      <img src={weedPlant} alt="weedPlantLogo" className="weedPlant-icon" />
      <div className='footer-text'>
        <div className='bottomHeader'>
        <span className='btmHighlight'>Why is this important?</span>
        </div>
        {' '}
        It was believed that all Mexican immigrants smoked this drug regularly and were the first to bring this “harmful”, “dangerous” and “foreign” substance into the United States but this is simply false. Some immigrant laborers enjoyed smoking after long days of work but the vast majority of immigrants were not using marijuana at all. Unfortunately, the United States used this emergence of recreational marijuana as a way to push anti-immigrant sentiment.
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