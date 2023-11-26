import React, { useState, useEffect } from "react";
import esfera from "./4es.png";
import "./root.css";
import ball from "./balll.png";
import db from "./db.png";
import z from "./Z.png";
import zL from "./DBZ_Logo.png";
import GT from "./GT.png";
import SP from "./super.png";
import DBH from "./DBH.png";
import DBD from "./DBD.png";
import GTL from "./GTL.png"
import DBSL from "./DBSL.png"
import DBHL from "./DBHL.png"
import DBDL from "./DBDL.png"
import BOG from "./BOG.png"
import BOGL from "./BOGL.png"
import ROF from "./ROF.png"
import ROFL from "./ROFL.png"

const series = [
  {
    id: 1,
    name: "Dragon Ball",
    image_front: ball,
    image_back: db,
    resume:
      "La historia sigue a un niño llamado Son Goku, quien vive solo en las montañas y tiene una cola de mono. Un día, conoce a Bulma, una brillante científica en busca de las Esferas del Dragón, siete esferas mágicas que, cuando se reúnen, invocan al dragón Shenlong, quien puede conceder un deseo.",
    year: "1988-1989",
    a:"series",
  },
  {
    id: 2,
    name: "Dragon Ball Z",
    image_front: z,
    image_back: zL,
    resume:
      "Dragon Ball Z (DBZ) es una serie de anime y manga japonesa creada por Akira Toriyama. Es la secuela de Dragon Ball y sigue las aventuras de Son Goku después de su victoria sobre Piccolo en el Torneo Mundial de Artes Marciales. La trama se centra en las batallas épicas de Goku y sus amigos contra poderosos enemigos, incluidos extraterrestres, androides y seres interdimensionales. ",
    year: "1989-1996",
    a:"series",
  },
  {
    id: 3,
    image_front:GT,
    image_back:GTL,
    resume:" Dragon Ball GT es la continuación de Dragon Ball Z y sigue las aventuras de Son Goku en una búsqueda intergaláctica para recuperar las Esferas del Dragón dispersas. En esta emocionante travesía, Goku enfrenta nuevos desafíos cósmicos, conoce a nuevos aliados y enemigos, y explora dimensiones desconocidas en su esfuerzo por restaurar la paz en el universo.",
    name: "Dragon Ball GT",
    year:"1996-1997",
    a:"series",
  },
  {
      id:4,
      image_front:SP,
      image_back:DBSL,
      resume:" Dragon Ball Super continúa la épica saga de Goku y sus amigos después de los eventos de Dragon Ball Z. La trama se desarrolla tras la derrota de Majin Buu, introduciendo poderosos dioses y nuevos universos al multiverso de Dragon Ball. Goku y sus compañeros participan en torneos cósmicos, enfrentándose a enemigos formidables y desbloqueando niveles de poder aún más allá de su comprensión. Con animación moderna y emocionantes batallas, Dragon Ball Super lleva la franquicia a nuevas alturas.",
      name: "Dragon Ball Super",
      year:"2015-2018",
      a:"series",
  },
  {
      id:5,
      image_front: DBH,
      image_back:DBHL,
      resume:"Dragon Ball Heroes es una serie derivada que se sumerge en un fascinante mundo de batallas interdimensionales y fusiones de personajes icónicos de Dragon Ball. Con un enfoque en la acción y los enfrentamientos épicos, la trama sigue a un grupo de héroes que se embarcan en misiones para proteger el multiverso. Presenta una narrativa única que aprovecha al máximo el vasto elenco de personajes y las posibilidades ilimitadas de la franquicia Dragon Ball, brindando a los fanáticos una experiencia llena de emoción y sorpresas.",
      name:"Dragon Ball Heroes",
      year:"2018",
      a:"series",
  },
  {
      id:6,
      image_front:DBD,
      image_back:DBDL,
      resume:"Dragon Ball Daima nos transporta a una nueva aventura en el universo de Dragon Ball. Con una historia original, la serie nos sumerge en emocionantes batallas y desafíos mientras sigue las hazañas de nuevos personajes. Con un estilo único y giros inesperados, Dragon Ball Daima promete explorar nuevas dimensiones del universo Dragon Ball y cautivar a los fanáticos con su frescura y originalidad.",
      name:"Dragon Ball Daima",
      year:"2024",
      a:"series",
  },
];
const movies = [
  {
    id:1,
    name: "La batalla de los dioses",
    image_front: BOG,
    image_back: BOGL,
    resume:
      "Los Guerreros Z se enfrentan a Beerus, el Dios de la Destrucción, quien busca un oponente digno. Goku debe alcanzar nuevas cotas de poder para detener esta amenaza divina.",
    year: "2013",
    a:"movies",
  },
  {
    id:2,
    name: "La resurrección de Freezer",
    image_front: ROF,
    image_back: ROFL,
    resume:
      "Freezer, el antiguo enemigo de Goku, es resucitado con un poder aún más formidable. Los Guerreros Z deben enfrentarse a esta amenaza para proteger la Tierra.",
    year: "2015",
    a:"movies",
  },
  {
    id:3,
    name: "Dragon Ball Super: Broly",
    //image_front: ,
    //image_back: ,
    resume:
      "La historia del pasado de Broly se revela cuando este poderoso Saiyan se cruza en el camino de Goku y Vegeta. Una batalla épica está a punto de desatarse.",
    year: "2018",
    a:"movies",
  },
  {
    id:4,
    name: "Dragon Ball Super: Hero",
    //image_front: ,
    //image_back: ,
    resume:
      "Goku y sus aliados enfrentan una nueva amenaza que pone en peligro la existencia del universo. Una historia épica llena de acción y nuevos desafíos.",
    year: "2023", 
    a:"movies",
  },
];

const Rotar = ({ serie, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    isVisible && (
      <div className={`flip-container ${isFlipped ? "flipped" : ""}`} onDoubleClick={handleFlip}>
        <div className="flipper">
          <div className="front">
            <div className="frente" style={{ left: `${100 + parseInt(serie.id - 1) * 600}px`, position: "absolute", boxShadow: "10px 10px 10px gray", height: "600px", borderRadius: "20px" }}>
              <img src={serie.image_front} style={{ width: "100%" }} alt="Dragon Ball" />
              <h1 style={{margin:"20px"}}>{serie.name}</h1>
              <h3 style={{margin:"20px"}}>{serie.year}</h3>
              <a style={{ color: "white", margin:"20px" }} href={`/${serie.a}/${parseInt(serie.id)}`}><button style={{ backgroundColor: "orange" }}>Ver más</button></a>
            </div>
          </div>
          <div className="back" >
            <div className="atras" style={{ left: `${100 + parseInt(serie.id - 1) * 600}px`, position: "absolute", height: "800px" }} >
              <img src={serie.image_back} style={{ width: "100%" }} alt="Dragon Ball" />
              <h3>{serie.resume}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
const Rotar2 = ({ movies, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    isVisible && (
      <div className={`flip-container ${isFlipped ? "flipped" : ""}`} onDoubleClick={handleFlip}>
        <div className="flipper">
          <div className="front">
            <div className="frente" style={{ left: `${100 + parseInt(movies.id - 1) * 600}px`, position: "absolute", boxShadow: "10px 10px 10px gray", height: "600px", borderRadius: "20px" }}>
              <img src={movies.image_front} style={{ width: "100%" }} alt="Dragon Ball" />
              <h2  className="titulon" style={{margin:"20px"}}>{movies.name}</h2>
              <h3 style={{margin:"20px"}}>{movies.year}</h3>
              <a style={{ color: "white", margin:"20px" }} href={`/movies/${parseInt(movies.id)}`}><button style={{ backgroundColor: "orange" }}>Ver más</button></a>
            </div>
          </div>
          <div className="back" >
            <div className="atras" style={{ left: `${100 + parseInt(movies.id - 1) * 600}px`, position: "absolute", height: "800px" }} >
              <img src={movies.image_back} style={{ width: "100%" }} alt="Dragon Ball" />
              <h3>{movies.resume}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  );
};



const Root = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <header className="head">
        <a href={'/'}><img src={esfera} className="ball" alt="Esfera del Dragón" /></a>
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
      <h1 className="serie" >Series</h1>
      <div className="Hola">
      {series.slice(0, window.innerWidth >= 1200 ? 2 : 1).map((serie, index1) => (
  <div key={index1} style={{ position: "absolute", top: "60%", left: `${index1 * (window.innerWidth >= 600 ? 100 : 0)}px`, marginLeft:`${window.innerWidth >= 600 ? 0 : -150}px`, marginRight:`${window.innerWidth >= 600 ? 0 : 200}px` }}>
    <Rotar serie={serie} isVisible={window.innerWidth >= 600 || index1 === 0} />
  </div>
  
))}


      </div>
      <div style={{ width: "25%" }}>
        <a href={'/seriesList'} style={{ color: "white", position: "absolute",fontSize:`${window.innerWidth >= 600 ? 1 : 4}vw`, top: `${window.innerWidth >= 600 ? 210 : 180}%`, left: "25%", width: "50%", marginTop:"50px" }}><button style={{ backgroundColor: "orange", width: "100%", height:"10%" }}>Ver más series</button></a>
      </div>
      <h1 className="Peliculas">Peliculas</h1>
      {movies.slice(0, window.innerWidth >= 1200 ? 2 : 1).map((movies, index2) => (
  <div key={index2} style={{ position: "absolute", top: "210%", left: `${index2 * (window.innerWidth >= 600 ? 100 : 0)}px`, marginLeft:`${window.innerWidth >= 600 ? 0 : -150}px`, marginRight:`${window.innerWidth >= 600 ? 0 : 200}px` }}>
    <Rotar serie={movies} isVisible={window.innerWidth >= 600 || index2 === 0} />
  </div>
  

))}
<div style={{ width: "25%" }}>
        <a href={'/moviesList'} style={{ color: "white", position: "absolute",fontSize:`${window.innerWidth >= 600 ? 1 : 4}vw`, top: `${window.innerWidth >= 600 ? 360 : 330}%`, left: "25%", width: "50%", marginTop:"50px" }}><button style={{ backgroundColor: "orange", width: "100%", height:"10%" }}>Ver más peliculas</button></a>
      </div>
    </>
  );
};

export default Root;
