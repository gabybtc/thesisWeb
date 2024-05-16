import React, { useState } from 'react';
import { goNextImg, goBackImg } from '../../images/images';
import './ImageSlider.css';

const ImageSlider = ({ images, captions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="imageSliderContainer">
     <div className="imageContainer">
    <span className="prevButton3" onClick={goToPrev}>
      <img src={goBackImg}/>
    </span>
    <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
    <div className="caption">{captions[currentIndex]}</div>
    <span className="nextButton3" onClick={goToNext}>
      <img src={goNextImg}/>
    </span>
    </div>
  </div>
  );
};

export default ImageSlider;