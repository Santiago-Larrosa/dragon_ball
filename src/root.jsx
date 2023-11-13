import React, { useState } from "react";
import esfera from "./4es.png";
import "./root.css";
import ball from "./balll.png";
import db from "./db.png";
import z from "./Z.png";
import zL from "./DBZ_Logo.png";

const series = [
  {
    id: 1,
    name: "Dragon Ball",
    image_front: ball,
    image_back: db,
    resume:
      "La historia sigue a un niño llamado Son Goku, quien vive solo en las montañas y tiene una cola de mono. Un día, conoce a Bulma, una brillante científica en busca de las Esferas del Dragón, siete esferas mágicas que, cuando se reúnen, invocan al dragón Shenlong, quien puede conceder un deseo.",
    year: "1988-1989",
  },
  {
    id: 2,
    name: "Dragon Ball Z",
    image_front: z,
    image_back: zL,
    resume:
      "Dragon Ball Z (DBZ) es una serie de anime y manga japonesa creada por Akira Toriyama. Es la secuela de Dragon Ball y sigue las aventuras de Son Goku después de su victoria sobre Piccolo en el Torneo Mundial de Artes Marciales. La trama se centra en las batallas épicas de Goku y sus amigos contra poderosos enemigos, incluidos extraterrestres, androides y seres interdimensionales. ",
    year: "1989-1996",
  },
];

const Rotar = ({ serie }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-container ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flipper">
        <div className="front">
          <div className="frente" style={{left:`${100+parseInt(serie.id-1)*600}px`, position:"absolute", top:`${0-(((parseInt(serie.id)-1)-((parseInt(serie.id)+1)-1)*100))}px`}}>
            <img src={serie.image_front} style={{ width: "500px" }} alt="Dragon Ball" />
            <h1>{serie.name}</h1>
            <h3>{serie.year}</h3>
          </div>
        </div>
        <div className="back" >
          <div className="atras" style={{left:`${100+parseInt(serie.id-1)*600}px`, position:"absolute", top:`${0-(((parseInt(serie.id)-1)-((parseInt(serie.id)+1)-1)*100))}px`}} >
            <img src={serie.image_back} style={{ width: "500px" }} alt="Dragon Ball" />
            <h3>{serie.resume}</h3>
          </div>
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
        <img src={esfera} className="ball" alt="Esfera del Dragón" />
        <h1 className="dragon">
          <b>Dragon Ball WIKI</b>
        </h1>
      </header>
      <div className="carousel-container">
        <div className="image-slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="prev-btn" onClick={prevSlide}>
          &#9665;
        </div>
        <div className="next-btn" onClick={nextSlide}>
          &#9655;
        </div>
      </div>
      <h1 style={{ color: "black", position: "absolute", top: "80%", left: "100px" }}>Series</h1>
      <div className="Hola">
        {series.map((serie, index1) => (
          <div key={index1} style={{ marginRight: `${parseInt(index1)*100}px` }}>
            <Rotar serie={serie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Root;

