import React from 'react';
import { backgroundFull, MJBigIcon, BGMarijuana } from '../images/images';
import './HomePage.css';
import Navbar from './elements/NavBar';
import TimeLine from './elements/TimeLine';
import BoxGroup from './elements/BoxGroup';
import WaysToHelp from './elements/WaysToHelp';

const HomePage = () => {
  return (
    <div 
    style={{
        minHeight: '600vh',
        backgroundImage: `url(${backgroundFull})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <Navbar/>
    <div className="containerHome">
        <div className='Web-titleText'>
      <div className = 'mainHeader'>
        The racist &amp; xenophobic history of America's cannabis laws
        </div>
      <div className='mainsubtitle'>
        Scroll to learn more about the history of this drug and how it is intertwined with immigration and people of color in the United States
    </div>
    </div>
      <img src={MJBigIcon} alt="mj-big-icon" className="MJ-icon-big" />
    </div>
    <div className='timeline'>
    <TimeLine/>
    </div>
    <div className='CannabisHysteria-sect'>
      <div className='CH-title'>
      Cannabis Hysteria
      </div>
      <div className='CH-subtitle'>
      U.S. politicians used a number of methods to give cannabis a bad reputation and incite panic among white Americans. These methods have created racist roots in our legislation and societal perceptions, which are important to acknowledge.
      </div>
      <div className='boxes'>
        <BoxGroup/>
      </div>
    </div>
    <div className='Legalizing-sect'>
      <div className='CH-title'>
      Legalizing Marijuana
      </div>
      <div className='legal-text'>
      The recent implementation of recreational marijuana laws and pardons for incarceration for possession have helped with disproportionate drug related incarceration rates. However, it is immensely difficult to get rid of years and years of built prejudice and racism surrounding this drug.
      </div>
      <div className='legal-text'>
      In 2022, <a href="https://www.vera.org/news/bidens-cannabis-pardons-one-small-step-to-ending-war-on-drugs-much-more-needed" target="_blank" style={{ color: 'white', fontStyle: 'italic' }}>Biden pardoned thousands of people convicted under federal law of cannabis possession</a>, and now...
      </div>
      <div className='emphasis-text'>
      the rates of incarceration for Marijuana are at an <span className='emphasis-highlight'>all time low</span>
      </div>
      <div className='legal-text' style={{ marginRight: '75%'}}>
      This is monumental given that more people were arrested for drug possession than any other type of crime a few years prior, <a href="https://www.unodc.org/documents/ungass2016/Contributions/Civil/DrugPolicyAlliance/DPA_Fact_Sheet_Drug_War_Mass_Incarceration_and_Race_June2015.pdf" target="_blank" style={{ color: 'white', fontStyle: 'italic' }}>with most of those arrested being latino & black.</a>
      </div>
      <div class="graph-box-container">
      <a href="https://norml.org/laws/arrest-charts/" target="_blank"> <img src="https://norml.org/wp-content/uploads/2023/10/marijuana-arrests-chart-sh-1200.png" alt="U.S. Marijuana Arrests" border="0" className='graph-image'/></a>
      <div className='graph-text'>
        Graph from NORML (a nonprofit advocacy group in the United States that aims to legalize marijuana for responsible adult use, end cannabis prohibition, and reform related laws and policies) according to the FBI's Uniform Crime Report, 2023
      </div>
      </div>
    </div>
    <div className='breakBtwn-text'>
      <div className='breakBtwn-title'>
      The problem is, this is <span style={{ color: '#25321A'}}>not enough.</span>
      <br /> 
      A critical systemic problem such as this one requires systemic solutions.
      </div>
      <div className='breakBtwn-para'>
      Marijuana is still fully illegal at the federal level, and for states where it has been legalized, most of those profiting off of cannabis are white. So after years of suffering at the hands of the United States public racist opinion of this drug, those affected cannot reap the benefits of its legalization.
      </div>
    </div>
    <div className='waysToHelp'>
      <WaysToHelp/>
    </div>
    <div className="background-icons2">
    <img src={BGMarijuana} alt="mj-bg-icon" className="background-icon2 background-icon-top-left"/>
    <img src={BGMarijuana} alt="mj-bg-icon" className="background-icon2 background-icon-bottom-right"/>
      </div>
    </div>
  );
};

export default HomePage;