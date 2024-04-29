import React from 'react';
import './QuestionAnswer4.css';
import { WhiteNext, statisticsPic } from '../../images/images';
import { Link } from 'react-router-dom';

const QuestionAnswer4 = () => {

  return (
    <div>
    <div className="box-container">
      <div className="box-headerQ4">
        <div className='title4'>
        <span className='titlehighlight4'>This is the actual statistic </span>
        </div>
    </div>
    <div className='textContent4'>
        <div className='textPartOne'>
        In 2013, despite making up 30% of the US Population...
        </div>
        <div className='percentage'>
            77%
        </div>
        <div className='percentageCont'>
        of those incarcerated in federal prisons for drug offenses<br />  were Black/Latino
        </div>
        <div className='textBlockpt1'>
        Though this number has declined somewhat since, statistics like these create long tail legacies that have negative repercussions for societal and law enforcement prejudices against latin and other immigrants. We must work to eliminate this prejudice against latin immigrants and more generally, against people of color.
        </div>
        <div className='textBlockpt2'>
        The fact is, <span style={{ color: '#71B659', fontWeight: 'bold'}}>white Americans use marijuana at very similar rates to the black and latino population,</span> so the stubborn belief that this drug is being used "dangerously" ONLY by latino & black communities is patently false.
        </div>
    </div>
    <div className='statsImageBox'>
    <img src={statisticsPic} alt="mj-statistics" className="statistcs-img" />
    </div>
    </div>
    <Link to="/home" className="next-btn-tohome">
        Next <img src={WhiteNext} alt="next" className="next-icon" />
    </Link>
    </div>
  );
};

export default QuestionAnswer4;