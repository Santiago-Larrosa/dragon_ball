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
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import GKF from "./GOKUF.png"
import GKB from "./GOKUB.png"
import VGF from "./VEGETAF.png"
import VGB from "./VEGETAB.png"

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
const characters = [
  {
    id:1,
    name: "Goku",
    image_front: GKF,
    image_back: GKB,
    resume: "Goku, un Saiyan creado por Akira Toriyama, es el héroe central de Dragon Ball. Criado en la Tierra, busca constantemente mejorar sus habilidades de combate. Ha enfrentado a poderosos enemigos y alcanzado transformaciones como Super Saiyan y Ultra Instinct. Aunque ama la batalla, su corazón puro y su optimismo lo distinguen. Goku personifica valores como la perseverancia y la amistad, dejando un impacto duradero en el universo Dragon Ball y siendo un ícono amado en la cultura pop.",
    year: "737",
    a: "characters",
  },
  {
    id:2,
    name: "Vegeta",
    image_front: VGF,
    image_back: VGB,
    resume:"Vegeta, el orgulloso príncipe Saiyan, es un guerrero feroz con una determinación inquebrantable. Inicialmente rival de Goku, su búsqueda constante de poder y redención lo ha llevado a convertirse en un aliado valioso. A pesar de su actitud altiva, Vegeta ha demostrado tener un corazón noble y una lealtad inquebrantable hacia sus seres queridos. Su evolución desde un villano arrogante hasta un defensor apasionado del universo lo ha convertido en uno de los personajes más icónicos de Dragon Ball.",
    year:"732",
    a:"characters",
  },
  {
    id:3,
    name: "Krillin",
    resume:"Krillin, un valiente guerrero terrestre, ha demostrado ser un compañero leal y valioso en las batallas junto a Goku. A pesar de carecer de habilidades Saiyan, su valentía y habilidades marciales excepcionales lo destacan. A lo largo de las sagas, Krillin ha enfrentado desafíos formidables, mostrando su determinación y fuerza interior. Además de su papel como luchador, su amistad cercana con Goku lo ha convertido en un miembro esencial del equipo Z. Krillin personifica la resiliencia y la importancia de los héroes humanos en el mundo de Dragon Ball.",
    year:"736",
    a:"characters",
  },
  {
    id:4,
    name: "Piccolo",
    resume:"Piccolo, un Namekiano sabio y poderoso, ha desempeñado roles cruciales en la historia de Dragon Ball. Inicialmente un enemigo de Goku, su transformación en aliado y mentor revela su complejidad. Con habilidades como regeneración y técnicas especiales, Piccolo es un estratega astuto en la batalla. Su conexión con Gohan añade capas emocionales a su personaje, destacando su evolución desde un villano a un defensor comprometido del universo. Piccolo personifica la redención y el poder de cambiar, demostrando que incluso los personajes más oscuros pueden encontrar la luz.",
    year:"753",
    a:"characters",
  },
  {
    id:5,
    name: "Majin Buu",
    resume:"Majin Buu, una entidad mágica y caprichosa, es conocido por su naturaleza impredecible. Inicialmente presentado como un villano destructivo, Buu experimenta transformaciones notables a lo largo de la serie. Desde el malévolo Kid Buu hasta la versión más benigna, Buu se convierte en un ser con múltiples facetas. Aunque su historia comienza con caos y destrucción, la redención y la conexión con Mr. Satán revelan su lado más humano. La historia de Majin Buu destaca la complejidad de la moralidad en el universo de Dragon Ball.",
    year:"--",
    a:"characters",
  },
  {
    id:6,
    name: "Bills",
    resume:"Majin Buu, una entidad mágica y enigmática, es conocido por su naturaleza impredecible y poder destructivo. Inicialmente, Buu surge como una fuerza malévola imparable, pero a medida que avanza la historia, experimenta transformaciones que revelan diferentes aspectos de su personalidad. Desde el temible Kid Buu hasta formas más amigables como Fat Buu, su narrativa es una exploración única de la dualidad entre la oscuridad y la redención en el universo de Dragon Ball. La evolución de Majin Buu destaca la complejidad de los personajes en la serie.",
    year:"--",
    a:"characters",
  },
  {
    id:7,
    name: "Moro",
    resume:"Moro, el Devorador de Planetas, es un temible hechicero y villano en Dragon Ball. Con la habilidad de absorber la energía vital de planetas enteros, Moro representa una amenaza cósmica. Su búsqueda insaciable de poder lo lleva a enfrentarse a los guerreros Z, desafiando incluso a Goku y Vegeta. La astucia y crueldad de Moro lo convierten en un antagonista formidable, destacando la constante necesidad de los héroes de superar desafíos cada vez más grandes en el universo Dragon Ball.",
    year:"?-780",
    a:"characters",
  },
  {
    id:8,
    name: "Gas",
    resume:"Un guerrero sumamente orgulloso en su poder, Gas es un individuo serio, cruel y callado que desea cumplir el sueño de su hermano, Elec, de convertir a los Heata en la organización más poderosa del universo.",
    year:"?-781",
    a:"characters",
  },
  {
    id:9,
    name: "Trunks",
    resume:"Trunks, hijo de Vegeta y Bulma, es un guerrero Saiyan y un personaje clave en Dragon Ball. Su llegada del futuro con advertencias sobre cataclismos influye significativamente en la historia. Con su característico estilo de lucha y la icónica espada, Trunks desempeña un papel esencial en la batalla contra amenazas como los Androides y Cell. Su mezcla de determinación, valentía y el legado de su linaje Saiyan lo convierten en un héroe perdurable en la saga, dejando una marca indeleble en el universo Dragon Ball.",
    year:"766",
    a:"characters",
  },
  {
    id:10,
    name: "Bardock",
    resume:"Bardock, el padre de Goku, es un guerrero Saiyan conocido por su valentía y resistencia. Aunque inicialmente sirve en las fuerzas de Freezer, Bardock se rebela al descubrir los oscuros planes del tirano espacial. Su historia se destaca por la predicción de la destrucción de su planeta natal, Vegeta, y su lucha solitaria contra las fuerzas de Freezer. La determinación y sacrificio de Bardock hacen de él una figura memorable en el universo Dragon Ball, influyendo en el destino de su hijo y dejando una huella perdurable en la mitología Saiyan.",
    year:"704",
    a:"characters",
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
        <a href="https://www.instagram.com/dragonballsuper/?hl=es" target="_blank">
        <img src={I} className="instagram" ></img></a>
        <a href="https://twitter.com/DB_official_en?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
          <img src={T} className="twitter"></img></a>
        <a href="https://www.youtube.com/@ToeiAnimationjp" target="_blank">
          <img src={Y} className="youtube"></img></a>
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
      <a href={"/blog"} className="irBlog"><button className="BlogB">Blog</button></a>
      <div className="Hola">
      {series.slice(0, window.innerWidth >= 1200 ? 2 : 1).map((serie, index1) => (
  <div key={index1} style={{ position: "absolute", top: "60%", left: `${index1 * (window.innerWidth >= 600 ? 100 : 0)}px`, marginLeft:`${window.innerWidth >= 600 ? 0 : -150}px`, marginRight:`${window.innerWidth >= 600 ? 0 : 200}px` }}>
    <Rotar serie={serie} isVisible={window.innerWidth >= 600 || index1 === 0} />
  </div>
  
))}


      </div>
      <div style={{ width: "100%" }}>
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
      <h1 className="Personajes">Personajes</h1>
      {characters.slice(0, window.innerWidth >= 1200 ? 2 : 1).map((characters, index2) => (
  <div key={index2} style={{ position: "absolute", top: "360%", left: `${index2 * (window.innerWidth >= 600 ? 100 : 0)}px`, marginLeft:`${window.innerWidth >= 600 ? 0 : -150}px`, marginRight:`${window.innerWidth >= 600 ? 0 : 200}px` }}>
    <Rotar serie={characters} isVisible={window.innerWidth >= 600 || index2 === 0} />
  </div>
  

))}
<div style={{ width: "25%" }}>
        <a href={'/charlist'} style={{ color: "white", position: "absolute",fontSize:`${window.innerWidth >= 600 ? 1 : 4}vw`, top: `${window.innerWidth >= 600 ? 540 : 500}%`, left: "25%", width: "50%", marginTop:"50px" }}><button style={{ backgroundColor: "orange", width: "100%", height:"10%" }}>Ver más personajes</button></a>
      </div>
    </>
  );
};

export default Root;
