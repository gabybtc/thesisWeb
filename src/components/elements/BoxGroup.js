import React, { useState } from 'react';
import { FBNIcon, ResearchBiasIcon, UseofMJIcon, propagandaIcon } from '../../images/images'
import './BoxGroup.css';

const BoxGroup = () => {
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(null);

  const boxData = [
    {
      title: 'Federal Bureau of Narcotics',
      titleColor: '#FFFFFF', 
      highlightColor: '#25321A',
      svgImage: (
        <img src={FBNIcon} alt="FBN"/>
      ),
      hoverContent: (
        <div className='hovered-box'>
          <div className='hovered-Title'>
            <img src = {FBNIcon} alt='' className='miniIcon'/>
            <span className='hovered-titleHighlight'>Federal Bureau of Narcotics</span>
          </div>
          <div className='hovered-text1'>
          In the 1930s, the new head of the Federal Bureau of Narcotics, Henry Aslinger, used racism to seek and achieve a federal ban on cannabis.
          <div className='hovered-text2'>
            Aslinger used statements such as, <a href="https://www.britannica.com/story/why-is-marijuana-illegal-in-the-us">"Reefer makes darkies think they're as good as white men,”</a> and claimed white women smoking marijuana would be taint themed  and result in them havingwill end up having sex with black men. He used this striking xenophobia to push acts such as the Marijuana Tax Act and classify marijuana as a schedule Schedule I drug (same as heroin and LSD). Aslinger's evident racism were was one of the main causes of the indisproportiaonate arrests of people of color for on marijuana-related charges.
        </div>
          </div>
        </div>
      ),
      color: '#FFFFFF',
    },
    {
      title: 'Research Bias',
      titleColor: '#25321A', 
      highlightColor: '#FFFFFF',
      svgImage: (
        <img src={ResearchBiasIcon} alt="research-bias"/>
      ),
      hoverContent: (
        <div className='hovered-box'>
          <div className='hovered-Title' style={{ color: '#25321A'}}>
            <img src = {ResearchBiasIcon} alt='' className='miniIcon'/>
            <span className='hovered-titleHighlight' style={{ background: 'white'}}>Research Bias</span>
          </div>
          <div className='hovered-text1' style={{ color: 'white'}}>
          Until recently, research into cannabis and its mental and physical effects only concentrated on the negative aspects of the drug and were not holistic. The drug is also still classified as a Schedule I drug (like heroin and LSD) despite our more accurate knowledge about cannabis today.
          <div className='hovered-text2'>
          In turn, legislators made bold false accusations about cannabis, with supporters fully trusting and believing these claims, and it was not until recently that we have had more accurate and less biased research to refute those claims. <a href="https://www.factcheck.org/2015/07/fiorina-shortchanges-marijuana-research/" style={{ color: 'white' }}>Here is an example.</a>
        </div>
          </div>
        </div>
      ),
      color: '#25321A',
    },
    {
      title: 'Use of "Marijuana"',
      titleColor: '#25321A', 
      highlightColor: '#FFFFFF',
      svgImage: (
        <img src={UseofMJIcon} alt="UseofMJ"/>
      ),
      hoverContent: (
        <div className='hovered-box'>
          <div className='hovered-Title' style={{ color: '#25321A'}}>
            <img src = {UseofMJIcon} alt='' className='miniIcon'/>
            <span className='hovered-titleHighlight' style={{ background: 'white'}}>Use of “Marijuana”</span>
          </div>
          <div className='hovered-text1'>
          There was a clear switch in language from “cannabis” to “marijuana” in 20th century America, most likely because of anti-immigrant sentiment.
          <div className='hovered-text2'>
          This adoption of the foreign-sounding word “marijuana” was simply another way to incite public xenophobia and push to prohibit the drug.
        </div>
        <div className='hovered-text2'>
        In fact, 18th century articles on “cannabis” and 19th century articles on “marijuana” almost seemed to be describing two different plants.
        </div>
          </div>
        </div>
      ),
      color: '#9FC175',
    },
    {
      title: 'Propaganda',
      titleColor: '#FFFFFF', 
      highlightColor: '#25321A',
      svgImage: (
        <img src={propagandaIcon} alt="propagandaIcon"/>
      ),
      hoverContent: (
        <div className='hovered-box'>
          <div className='hovered-Title'>
            <img src = {propagandaIcon} alt='' className='miniIcon'/>
            <span className='hovered-titleHighlight'>Propaganda</span>
          </div>
          <div className='hovered-text1'>
          Anti-cannabis propaganda took its form in the 1930s as exploitation movies, racially charged articles, and more.
          <div className='hovered-text2'>
          The movie Reefer Madness (1936) was a clear reflection of social attitudes and panic in that time period, and used racism to incite fear among white Americans towards the drug and the people of color who supposedly abused it. 
        </div>
        <div className='hovered-text2'>
        Some statements used in association with cannabis propaganda included: “Assassination of youth” and “Evil Mexican plants.”
        </div>
          </div>
        </div>
      ),
      color: '#FFFFFF'
    },
  ];

  return (
    <div className="box-group">
      {boxData.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          titleColor={box.titleColor}
          highlightColor={box.highlightColor}
          svgImage={box.svgImage}
          hoverContent={box.hoverContent}
          color = {box.color}
          isHovered={hoveredBoxIndex === index}
          onHover={() => setHoveredBoxIndex(index)}
          onUnhover={() => setHoveredBoxIndex(null)}
        />
      ))}
    </div>
  );
};

const Box = ({ title, titleColor, highlightColor, svgImage, hoverContent, color, isHovered, onHover, onUnhover }) => (
  <div
    className={`box ${isHovered ? 'box--hovered' : ''}`}
    onMouseEnter={onHover}
    onMouseLeave={onUnhover}
    style={{ backgroundColor: color }} // Apply the color prop to the box's background
  >
    {isHovered ? hoverContent : (
      <div>
        <div className="box__title" style={{ color: titleColor }}> <span style={{
            backgroundColor: highlightColor, 
            padding: '0.2rem 0.2rem',
            borderRadius: '2rem',   
            display: 'inline-block',
            boxDecorationBreak: 'clone'
            }}>
            {title}
            </span></div>
        <div className="box__image">{svgImage}</div>
      </div>
    )}
  </div>
);

export default BoxGroup;