import React, { useState } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import "./Carousel.css";

function Carousel({ imgs }) {

    if (!Array.isArray(imgs)) {
        return <div>No images provided</div>;
      }
      
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            className={currentIndex === index ? "active" : "inactive"}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button className="left-btn" onClick={handlePrevious}>
          <ChevronLeftIcon />
        </button>
        <button className="right-btn" onClick={handleNext}>
          <ChevronRightIcon />
        </button>
      </div>
      <div className="carousel-indicator">
        {imgs.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
