import { useEffect, useState } from "react";
import esfera from "./4es.png";
import "./root.css";

const Rotar = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flipper">
        <div className="front">
          <h1 style={{color:'black'}}>Hola</h1>
        </div>
        <div className="back">
          <h1 style={{color:'black'}}>¡Rotado!</h1>
        </div>
      </div>
    </div>
  );
};

const Root = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <header className="head">
        <img src={esfera} className="ball" alt="Esfera del Dragón"></img>
        <h1 className="dragon"><b>Dragon Ball WIKI</b></h1>
      </header>
      <div className="carousel-container">
        <div className="image-slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="prev-btn" onClick={prevSlide}>&#9665;</div>
        <div className="next-btn" onClick={nextSlide}>&#9655;</div>
      </div>
      <Rotar />
    </>
  );
};

export default Root;
