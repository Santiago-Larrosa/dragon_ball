import { useState, useEffect } from 'react';
import esfera from "./4es.png";
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
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import "./seriesList.css";

const SeriesList = () => {
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
    {
      id: 3,
      image_front:GT,
      image_back:GTL,
      resume:" Dragon Ball GT es la continuación de Dragon Ball Z y sigue las aventuras de Son Goku en una búsqueda intergaláctica para recuperar las Esferas del Dragón dispersas. En esta emocionante travesía, Goku enfrenta nuevos desafíos cósmicos, conoce a nuevos aliados y enemigos, y explora dimensiones desconocidas en su esfuerzo por restaurar la paz en el universo.",
      name: "Dragon Ball GT",
      year:"1996-1997",
    },
    {
        id:4,
        image_front:SP,
        image_back:DBSL,
        resume:" Dragon Ball Super continúa la épica saga de Goku y sus amigos después de los eventos de Dragon Ball Z. La trama se desarrolla tras la derrota de Majin Buu, introduciendo poderosos dioses y nuevos universos al multiverso de Dragon Ball. Goku y sus compañeros participan en torneos cósmicos, enfrentándose a enemigos formidables y desbloqueando niveles de poder aún más allá de su comprensión. Con animación moderna y emocionantes batallas, Dragon Ball Super lleva la franquicia a nuevas alturas.",
        name: "Dragon Ball Super",
        year:"2015-2018",
    },
    {
        id:5,
        image_front: DBH,
        image_back:DBHL,
        resume:"Dragon Ball Heroes es una serie derivada que se sumerge en un fascinante mundo de batallas interdimensionales y fusiones de personajes icónicos de Dragon Ball. Con un enfoque en la acción y los enfrentamientos épicos, la trama sigue a un grupo de héroes que se embarcan en misiones para proteger el multiverso. Presenta una narrativa única que aprovecha al máximo el vasto elenco de personajes y las posibilidades ilimitadas de la franquicia Dragon Ball, brindando a los fanáticos una experiencia llena de emoción y sorpresas.",
        name:"Dragon Ball Heroes",
        year:"2018",
    },
    {
        id:6,
        image_front:DBD,
        image_back:DBDL,
        resume:"Dragon Ball Daima nos transporta a una nueva aventura en el universo de Dragon Ball. Con una historia original, la serie nos sumerge en emocionantes batallas y desafíos mientras sigue las hazañas de nuevos personajes. Con un estilo único y giros inesperados, Dragon Ball Daima promete explorar nuevas dimensiones del universo Dragon Ball y cautivar a los fanáticos con su frescura y originalidad.",
        name:"Dragon Ball Daima",
        year:"2024",
    },
  ];
  const Rotar = ({ serie }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
        <div className={`flip-containero ${isFlipped ? "flippedo" : ""}`} onDoubleClick={handleFlip}>
        <div className="flippero">
          <div className="fronto">
            <div className="frenteo" style={{ boxShadow: "10px 10px 10px gray", height: "700px", borderRadius: "20px" }}>
              <img src={serie.image_front} style={{ width: "100%" }} alt="Dragon Ball" />
              <div className="content">
                <h1>{serie.name}</h1>
                <div className="details">
                  <h3>{serie.year}</h3>
                  <a style={{ color: "white" }} href={`/series/${parseInt(serie.id)}`}>
                    <button style={{ backgroundColor: "orange" }}>Ver más</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="backo">
            <div className="atraso" style={{ height: "600px" }} >
              <img src={serie.image_back} style={{ width: "100%" }} alt="Dragon Ball" />
              <h3>{serie.resume}</h3>
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
        <a href="https://www.instagram.com/dragonballsuper/?hl=es" target="_blank">
        <img src={I} className="instagram" ></img></a>
        <a href="https://twitter.com/DB_official_en?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
          <img src={T} className="twitter"></img></a>
        <a href="https://www.youtube.com/@ToeiAnimationjp" target="_blank">
          <img src={Y} className="youtube"></img></a>
      </header>
      <div className="Hola">
        {series.map((serie, index) => (
          <div className="row" key={index}>
            <Rotar serie={serie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SeriesList;
