import { useState, useEffect } from 'react';
import esfera from "./4es.png";
import BOG from "./BOG.png"
import BOGL from "./BOGL.png"
import ROF from "./ROF.png"
import ROFL from "./ROFL.png"
import DBSB from "./DBSB.png"
import DBSBL from "./DBSBL.png"
import DBSSH from "./DBSSH.png"
import DBSSHL from "./DBSSHL.png"
import "./seriesList.css";

const MoviesList = () => {
    const movies = [
        {
          id: 1,
          name: "DBZ: La batalla de los dioses",
          image_front: BOG,
          image_back: BOGL,
          resume:
            "Los Guerreros Z se enfrentan a Beerus, el Dios de la Destrucción, quien busca un oponente digno. Goku debe alcanzar nuevas cotas de poder para detener esta amenaza divina.",
          year: "2013",
        },
        {
          id: 2,
          name: "DBZ: La resurrección de Freezer",
          image_front: ROF,
          image_back: ROFL,
          resume:
            "Freezer, el antiguo enemigo de Goku, es resucitado con un poder aún más formidable. Los Guerreros Z deben enfrentarse a esta amenaza para proteger la Tierra.",
          year: "2015",
        },
        {
          id: 3,
          name: "DBS: Broly",
          image_front: DBSB,
          image_back: DBSBL,
          resume:
            "La historia del pasado de Broly se revela cuando este poderoso Saiyan se cruza en el camino de Goku y Vegeta. Una batalla épica está a punto de desatarse.",
          year: "2018",
        },
        {
          id: 4,
          name: "DBS: Super Hero",
          image_front: DBSSH,
          image_back: DBSSHL,
          resume:
            "Goku y sus aliados enfrentan una nueva amenaza que pone en peligro la existencia del universo. Una historia épica llena de acción y nuevos desafíos.",
          year: "2023", 
        },
      ];
  const Rotar = ({ movies }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
        <div className={`flip-containero ${isFlipped ? "flippedo" : ""}`} onDoubleClick={handleFlip}>
        <div className="flippero" style={{width:"100%"}}>
          <div className="fronto">
            <div className="frenteo" style={{ boxShadow: "10px 10px 10px gray", height: "700px",width:"80%", borderRadius: "20px", left:"0px" }}>
              <img src={movies.image_front} style={{ width: "100%" }} alt="Dragon Ball" />
              <div className="content">
                <h1>{movies.name}</h1>
                <div className="details">
                  <h3>{movies.year}</h3>
                  <a style={{ color: "white" }} href={`/movies/${parseInt(movies.id)}`}>
                    <button style={{ backgroundColor: "orange" }}>Ver más</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="backo">
            <div className="atraso" style={{ height: "600px", width:"80%" }} >
              <img src={movies.image_back} style={{ width: "100%" }} alt="Dragon Ball" />
              <h3>{movies.resume}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <>
      <header className="head">
        <a href={'/'}><img src={esfera} className="ball" alt="Esfera del Dragón" /></a>
        <h1 className="dragon">
          <b>Dragon Ball WIKI</b>
        </h1>
      </header>
      <div className="Hola">
        {movies.map((movies, index) => (
          <div className="row" key={index}>
            <Rotar movies={movies} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;