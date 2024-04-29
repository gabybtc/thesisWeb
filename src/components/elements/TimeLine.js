import React, { useState, useEffect } from 'react';
import { ReactComponent as TimelineBackbone } from '../../images/imagesfiles/timelineBackbone.svg';
import './TimeLine.css';

const TimeLine = () => {
    // State to keep track of which div to show
    const [showDivs, setShowDivs] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Check if the backbone container is in the viewport
            const backboneContainer = document.querySelector('.backbone-container');
            const rect = backboneContainer.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom >= 0) {
                // If backbone container is in viewport, trigger animation
                backboneContainer.classList.add('show');
            }

            // Iterate over each div and check if it's in the viewport
            const divs = document.querySelectorAll('.timeline-item');
            divs.forEach((div, index) => {
                const rect = div.getBoundingClientRect();
                if (rect.top < windowHeight && rect.bottom >= 0) {
                    // If div is in viewport, trigger timeout to show it
                    setTimeout(() => {
                        setShowDivs(prevState => [...prevState, index]);
                    }, index * 1000); // Adjust delay as needed
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='allText'>
        <div className="backbone-container">
        <TimelineBackbone/>
        </div>
      <div className={`timeline-item ${showDivs.includes(0) ? 'show' : ''}`}>
      <div className='title-1910'>
      MEXICAN <br /> REVOLUTION
      </div>
      <div className='expl-1910'>
      Flood of Mexican Immigrants to the US and the first emergence cannabis as a recreational drug
      </div>
      </div>
      <div className={`timeline-item ${showDivs.includes(1) ? 'show' : ''}`}>
      <div className='title-1930'>
      Creation of Federal Bureau of Narcotics (FBN)
      </div>
      <div className='text-1930'>
      <span style={{fontWeight: 'bold'}}>The Great Depression:</span> Unemployment increased public resentment and fear of Mexican immigrants, in turn increasing public and governmental concern about marijuana. Research claimed to link marijuana with violence and crime primarily committed by "racially inferior" or immigrant communities.
      </div>
      </div>
      <div className={`timeline-item ${showDivs.includes(2) ? 'show' : ''}`}>
      <div className='text-1936'>
      Propaganda film “Reefer Madness” was released: Just one example of anti-marijuana propaganda to fuel hysteria about the drug to help push states to outlaw the drug based on the idea that the drug led to “insanity, criminality and death” 
      </div>
      <div className='reefermadness'>
        "Reefer Madness"
      </div>
      <div className='mjTaxAct'>
      <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>Marijuana Tax Act: </span> <br /> Shortly after (1937) congress passed the Marijuana Tax Act, restricting possession to those who paid a tax for certain authorized and specific medical/industrial uses
      </div>
      </div>
      <div className={`timeline-item ${showDivs.includes(3) ? 'show' : ''}`}>
      <div className='text-1951'>
      <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>Stricter Sentencing Laws: </span> <br /> Federal laws now dictated that a first-offense marijuana possession warranted a minimum sentence of 2-10 years and a fine of up to $20,000
      </div>
      </div>
      <div className={`timeline-item ${showDivs.includes(4) ? 'show' : ''}`}>
      <div className='text-1970'>
      <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>Most minimum sentences repealed: </span> Marijuana was found to not induce violence and was categorized separately from other narcotics. Mandatory federal sentences for small amounts in possession were eliminated. Smoking marijuana was also becoming popular among middle-class adults.
      </div>
      </div>
      <div className={`timeline-item ${showDivs.includes(5) ? 'show' : ''}`}>
      <div className='warondrugs'>
      <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>Reagan's War on Drugs: </span>The Reagan administration launched its own war on drugs resulting in incredibly large amounts of people of color being arrested for violating marijuana laws everyday. Mandatory sentences were put in place again.
      </div>
      <div className='text-1980'>
      The war on drugs continued under President George Bush in 1989 but a major public perception shift of marijuana was occurring. The tension between federal laws and state laws with regards to marijuana began.
      </div>
      </div>
      <div className={`timeline-item ${showDivs.includes(6) ? 'show' : ''}`}>
      <div className='title-1996'>
      CALIFORNIA IS 1ST STATE TO LEGALIZE MARIJUANA
      </div>
      <div className='text-1996'>
      <span style={{fontStyle: 'italic'}}>Proposition 215: </span>Allows for sale and medical use of marijuana (however - federal laws still prohibit marijuana possesion)
      </div>
      </div>
      </div>
    );
  };
  
  export default TimeLine;