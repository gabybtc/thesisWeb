import React, { useState } from 'react';
import './InteractiveComp1.css';
import Navbar from './elements/NavBar';
import Question1 from './questions/Question1';
import QuestionAnswer1 from './questions/QuestionAnswer1';
import Question2 from './questions/Question2';
import QuestionAnswer2 from './questions/QuestionAnswer2';
import Question3 from './questions/Question3';
import QuestionAnswer3 from './questions/QuestionAnswer3';
import Question4 from './questions/Question4';
import QuestionAnswer4 from './questions/QuestionAnswer4';
//fix and add progress bar when states made

const InteractiveComp = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [countryChosen, setCountryChosen] = useState(null);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);

  const handleNextQuestion = () => {
    setActiveQuestion(prevQuestion => prevQuestion + 1); // Move to the next question
  };

  const handleClick = (country) => {
    setCountryChosen(country);
    console.log(country);
  };

  const handleAnswer2Request = () => {
    setShowAnswer2(true);
  };

  const handleAnswer3Request = () => {
    setShowAnswer3(true);
  };

  const handleAnswer4Request = () => {
    setShowAnswer4(true);
  };

  const renderActiveQuestion = () => {
    switch (activeQuestion) {
      case 1:
        return (
          <div>
          {countryChosen === null ? ( // Render First Question if no circle is clicked (doesn't appear yet so not clicked)
            <Question1 onCircleClick={handleClick} />
          ) : ( // Render NewComponent if a circle is clicked
            <div className='answerBox'>
            <QuestionAnswer1 onNext = {handleNextQuestion}/>
            </div>
          )}
        </div>
        );
      case 2:
        return (
          <div>
          {showAnswer2 ? ( 
          <div className='answerBox'>
          <QuestionAnswer2 onNext = {handleNextQuestion}/>
          </div>
          ) : ( 
          <div className='questionCont'>
          <Question2 getAnswer={handleAnswer2Request} />
          </div>
          )}
          </div>
        );
      case 3:
        return (
          <div>
          {showAnswer3 ? ( 
          <div className='answerBox'>
          <QuestionAnswer3 onNext = {handleNextQuestion}/>
          </div>
          ) : ( 
          <div className='questionCont'>
          <Question3 getAnswer={handleAnswer3Request} />
          </div>
          )}
          </div>
        );
      case 4:
        return (
          <div>
          {showAnswer4 ? ( 
          <div className='answerBox'>
          <QuestionAnswer4/>
          </div>
          ) : ( 
          <div className='questionCont'>
          <Question4 getAnswer={handleAnswer4Request} />
          </div>
          )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="bg">
      {renderActiveQuestion()}
      <div className='background-circles'>
        <div className='circle circle-1'></div>
        <div className='circle circle-2'></div>
        <div className='circle circle-3'></div>
      </div>
    </div>
    </div>
  );
};

export default InteractiveComp;