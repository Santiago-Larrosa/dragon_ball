import { useState, useEffect } from 'react';
import esfera from "./4es.png";
import GKF from "./GOKUF.png"
import GKB from "./GOKUB.png"
import VGF from "./VEGETAF.png"
import VGB from "./VEGETAB.png"
import KLF from "./KRILINF.png"
import KLB from "./KRILINB.png"
import PCF from "./PICCOLOF.png"
import PCB from "./PICCOLOB.png"
import MJF from "./MAJINF.png"
import MJB from "./MAJINB.png"
import BIF from "./BILLSF.png"
import BIB from "./BILLSB.png"
import MRF from "./MOROF.png"
import MRB from "./MOROB.png"
import GSF from "./GASF.png"
import GSB from "./GASB.png"
import TRF from "./TRUNKSF.png"
import TRB from "./TRUNKSB.png"
import BRF from "./BARDOCKF.png"
import BRB from "./BARDOCKB.png"
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import "./seriesList.css";

const CharList = () => {
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
          image_front: KLF,
          image_back: KLB,
          name: "Krillin",
          resume:"Krillin, un valiente guerrero terrestre, ha demostrado ser un compañero leal y valioso en las batallas junto a Goku. A pesar de carecer de habilidades Saiyan, su valentía y habilidades marciales excepcionales lo destacan. A lo largo de las sagas, Krillin ha enfrentado desafíos formidables, mostrando su determinación y fuerza interior. Además de su papel como luchador, su amistad cercana con Goku lo ha convertido en un miembro esencial del equipo Z. Krillin personifica la resiliencia y la importancia de los héroes humanos en el mundo de Dragon Ball.",
          year:"736",
          a:"characters",
        },
        {
          id:4,
          image_front: PCF,
          image_back: PCB,
          name: "Piccolo",
          resume:"Piccolo, un Namekiano sabio y poderoso, ha desempeñado roles cruciales en la historia de Dragon Ball. Inicialmente un enemigo de Goku, su transformación en aliado y mentor revela su complejidad. Con habilidades como regeneración y técnicas especiales, Piccolo es un estratega astuto en la batalla. Su conexión con Gohan añade capas emocionales a su personaje, destacando su evolución desde un villano a un defensor comprometido del universo. Piccolo personifica la redención y el poder de cambiar, demostrando que incluso los personajes más oscuros pueden encontrar la luz.",
          year:"753",
          a:"characters",
        },
        {
          id:5,
          image_front: MJF,
          image_back: MJB,
          name: "Majin Buu",
          resume:"Majin Buu, una entidad mágica y caprichosa, es conocido por su naturaleza impredecible. Inicialmente presentado como un villano destructivo, Buu experimenta transformaciones notables a lo largo de la serie. Desde el malévolo Kid Buu hasta la versión más benigna, Buu se convierte en un ser con múltiples facetas. Aunque su historia comienza con caos y destrucción, la redención y la conexión con Mr. Satán revelan su lado más humano. La historia de Majin Buu destaca la complejidad de la moralidad en el universo de Dragon Ball.",
          year:"--",
          a:"characters",
        },
        {
          id:6,
          image_front: BIF,
          image_back: BIB,
          name: "Bills",
          resume:"Majin Buu, una entidad mágica y enigmática, es conocido por su naturaleza impredecible y poder destructivo. Inicialmente, Buu surge como una fuerza malévola imparable, pero a medida que avanza la historia, experimenta transformaciones que revelan diferentes aspectos de su personalidad. Desde el temible Kid Buu hasta formas más amigables como Fat Buu, su narrativa es una exploración única de la dualidad entre la oscuridad y la redención en el universo de Dragon Ball. La evolución de Majin Buu destaca la complejidad de los personajes en la serie.",
          year:"--",
          a:"characters",
        },
        {
          id:7,
          image_front: MRF,
          image_back: MRB,
          name: "Moro",
          resume:"Moro, el Devorador de Planetas, es un temible hechicero y villano en Dragon Ball. Con la habilidad de absorber la energía vital de planetas enteros, Moro representa una amenaza cósmica. Su búsqueda insaciable de poder lo lleva a enfrentarse a los guerreros Z, desafiando incluso a Goku y Vegeta. La astucia y crueldad de Moro lo convierten en un antagonista formidable, destacando la constante necesidad de los héroes de superar desafíos cada vez más grandes en el universo Dragon Ball.",
          year:"?-780",
          a:"characters",
        },
        {
          id:8,
          image_front: GSF,
          image_back: GSB,
          name: "Gas",
          resume:"Un guerrero sumamente orgulloso en su poder, Gas es un individuo serio, cruel y callado que desea cumplir el sueño de su hermano, Elec, de convertir a los Heata en la organización más poderosa del universo.",
          year:"?-781",
          a:"characters",
        },
        {
          id:9,
          image_front: TRF,
          image_back: TRB,
          name: "Trunks",
          resume:"Trunks, hijo de Vegeta y Bulma, es un guerrero Saiyan y un personaje clave en Dragon Ball. Su llegada del futuro con advertencias sobre cataclismos influye significativamente en la historia. Con su característico estilo de lucha y la icónica espada, Trunks desempeña un papel esencial en la batalla contra amenazas como los Androides y Cell. Su mezcla de determinación, valentía y el legado de su linaje Saiyan lo convierten en un héroe perdurable en la saga, dejando una marca indeleble en el universo Dragon Ball.",
          year:"766",
          a:"characters",
        },
        {
          id:10,
          image_front: BRF,
          image_back: BRB,
          name: "Bardock",
          resume:"Bardock, el padre de Goku, es un guerrero Saiyan conocido por su valentía y resistencia. Aunque inicialmente sirve en las fuerzas de Freezer, Bardock se rebela al descubrir los oscuros planes del tirano espacial. Su historia se destaca por la predicción de la destrucción de su planeta natal, Vegeta, y su lucha solitaria contra las fuerzas de Freezer. La determinación y sacrificio de Bardock hacen de él una figura memorable en el universo Dragon Ball, influyendo en el destino de su hijo y dejando una huella perdurable en la mitología Saiyan.",
          year:"704",
          a:"characters",
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
                  <a style={{ color: "white" }} href={`/characters/${parseInt(serie.id)}`}>
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
        {characters.map((characters, index) => (
          <div className="row" key={index}>
            <Rotar serie={characters} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CharList;