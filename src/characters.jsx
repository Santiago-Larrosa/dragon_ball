import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import esfera from "./4es.png";
import GKF from "./GOKUF.png"
import GKB from "./GOKUBan.png"
import VGF from "./VEGETAF.png"
import VGB from "./VEGETABan.png"
import KLF from "./KRILINF.png"
import KLB from "./KRILINBan.png"
import PCF from "./PICCOLOF.png"
import PCB from "./PICCOLOBan.png"
import MJF from "./MAJINF.png"
import MJB from "./MAJINBan.png"
import BIF from "./BILLSF.png"
import BIB from "./BILLSBan.png"
import MRF from "./MOROF.png"
import MRB from "./MOROBan.png"
import GSF from "./GASF.png"
import GSB from "./GASBan.png"
import TRF from "./TRUNKSF.png"
import TRB from "./TRUNKSBan.png"
import BRF from "./BARDOCKF.png"
import BRB from "./BARDOCKBan.png"
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import "./seriesStyle.css"; 


export default function Characters() {
  const { id } = useParams();
  const [characterss, setCharacterss] = useState({});
  const characters = [
    {
      id:1,
      name: "Goku",
      sup: GKF,
      Banner: GKB,
      info: "Goku, un Saiyan creado por Akira Toriyama, es el héroe central de Dragon Ball. Criado en la Tierra, busca constantemente mejorar sus habilidades de combate. Ha enfrentado a poderosos enemigos y alcanzado transformaciones como Super Saiyan y Ultra Instinct. Aunque ama la batalla, su corazón puro y su optimismo lo distinguen. Goku personifica valores como la perseverancia y la amistad, dejando un impacto duradero en el universo Dragon Ball y siendo un ícono amado en la cultura pop.",
      temp: "737",
    },
    {
      id:2,
      name: "Vegeta",
      sup: VGF,
      Banner: VGB,
      info:"Vegeta, el orgulloso príncipe Saiyan, es un guerrero feroz con una determinación inquebrantable. Inicialmente rival de Goku, su búsqueda constante de poder y redención lo ha llevado a convertirse en un aliado valioso. A pesar de su actitud altiva, Vegeta ha demostrado tener un corazón noble y una lealtad inquebrantable hacia sus seres queridos. Su evolución desde un villano arrogante hasta un defensor apasionado del universo lo ha convertido en uno de los personajes más icónicos de Dragon Ball.",
      temp:"732",
    },
    {
      id:3,
      sup: KLF,
      Banner: KLB,
      name: "Krillin",
      info:"Krillin, un valiente guerrero terrestre, ha demostrado ser un compañero leal y valioso en las batallas junto a Goku. A pesar de carecer de habilidades Saiyan, su valentía y habilidades marciales excepcionales lo destacan. A lo largo de las sagas, Krillin ha enfrentado desafíos formidables, mostrando su determinación y fuerza interior. Además de su papel como luchador, su amistad cercana con Goku lo ha convertido en un miembro esencial del equipo Z. Krillin personifica la resiliencia y la importancia de los héroes humanos en el mundo de Dragon Ball.",
      temp:"736",
    },
    {
      id:4,
      sup: PCF,
      Banner: PCB,
      name: "Piccolo",
      info:"Piccolo, un Namekiano sabio y poderoso, ha desempeñado roles cruciales en la historia de Dragon Ball. Inicialmente un enemigo de Goku, su transformación en aliado y mentor revela su complejidad. Con habilidades como regeneración y técnicas especiales, Piccolo es un estratega astuto en la batalla. Su conexión con Gohan añade capas emocionales a su personaje, destacando su evolución desde un villano a un defensor comprometido del universo. Piccolo personifica la redención y el poder de cambiar, demostrando que incluso los personajes más oscuros pueden encontrar la luz.",
      temp:"753",
    },
    {
      id:5,
      sup: MJF,
      Banner: MJB,
      name: "Majin Buu",
      info:"Majin Buu, una entidad mágica y caprichosa, es conocido por su naturaleza impredecible. Inicialmente presentado como un villano destructivo, Buu experimenta transformaciones notables a lo largo de la serie. Desde el malévolo Kid Buu hasta la versión más benigna, Buu se convierte en un ser con múltiples facetas. Aunque su historia comienza con caos y destrucción, la redención y la conexión con Mr. Satán revelan su lado más humano. La historia de Majin Buu destaca la complejidad de la moralidad en el universo de Dragon Ball.",
      temp:"--",
    },
    {
      id:6,
      sup: BIF,
      Banner: BIB,
      name: "Bills",
      info:"Majin Buu, una entidad mágica y enigmática, es conocido por su naturaleza impredecible y poder destructivo. Inicialmente, Buu surge como una fuerza malévola imparable, pero a medida que avanza la historia, experimenta transformaciones que revelan diferentes aspectos de su personalidad. Desde el temible Kid Buu hasta formas más amigables como Fat Buu, su narrativa es una exploración única de la dualidad entre la oscuridad y la redención en el universo de Dragon Ball. La evolución de Majin Buu destaca la complejidad de los personajes en la serie.",
      temp:"--",
    },
    {
      id:7,
      sup: MRF,
      Banner: MRB,
      name: "Moro",
      info:"Moro, el Devorador de Planetas, es un temible hechicero y villano en Dragon Ball. Con la habilidad de absorber la energía vital de planetas enteros, Moro representa una amenaza cósmica. Su búsqueda insaciable de poder lo lleva a enfrentarse a los guerreros Z, desafiando incluso a Goku y Vegeta. La astucia y crueldad de Moro lo convierten en un antagonista formidable, destacando la constante necesidad de los héroes de superar desafíos cada vez más grandes en el universo Dragon Ball.",
      temp:"?-780",
    },
    {
      id:8,
      sup: GSF,
      Banner: GSB,
      name: "Gas",
      info:"Un guerrero sumamente orgulloso en su poder, Gas es un individuo serio, cruel y callado que desea cumplir el sueño de su hermano, Elec, de convertir a los Heata en la organización más poderosa del universo.",
      temp:"?-781",
    },
    {
      id:9,
      sup: TRF,
      Banner: TRB,
      name: "Trunks",
      info:"Trunks, hijo de Vegeta y Bulma, es un guerrero Saiyan y un personaje clave en Dragon Ball. Su llegada del futuro con advertencias sobre cataclismos influye significativamente en la historia. Con su característico estilo de lucha y la icónica espada, Trunks desempeña un papel esencial en la batalla contra amenazas como los Androides y Cell. Su mezcla de determinación, valentía y el legado de su linaje Saiyan lo convierten en un héroe perdurable en la saga, dejando una marca indeleble en el universo Dragon Ball.",
      year:"766",
    },
    {
      id:10,
      sup: BRF,
      Banner: BRB,
      name: "Bardock",
      info:"Bardock, el padre de Goku, es un guerrero Saiyan conocido por su valentía y resistencia. Aunque inicialmente sirve en las fuerzas de Freezer, Bardock se rebela al descubrir los oscuros planes del tirano espacial. Su historia se destaca por la predicción de la destrucción de su planeta natal, Vegeta, y su lucha solitaria contra las fuerzas de Freezer. La determinación y sacrificio de Bardock hacen de él una figura memorable en el universo Dragon Ball, influyendo en el destino de su hijo y dejando una huella perdurable en la mitología Saiyan.",
      temp:"704",
    },
  ];
  

  


  useEffect(() => {
    const foundCharacters = characters.find((ser) => ser.id === parseInt(id));
    if (foundCharacters) {
    setCharacterss(foundCharacters);
    } else {
      console.error(`No se encontró la pelicula con id ${id}`);
      
    }
  }, [id]);

  return (
    <>
     <header className="head">
     <a href={'/'}><img src={esfera} className="ball" alt="Esfera del Dragón" /></a>
        <h1 className="dragon">
          <b className='dragon2'>Dragon Ball WIKI</b>
        </h1>
        <a href="https://www.instagram.com/dragonballsuper/?hl=es" target="_blank">
        <img src={I} className="instagram" ></img></a>
        <a href="https://twitter.com/DB_official_en?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
          <img src={T} className="twitter"></img></a>
        <a href="https://www.youtube.com/@ToeiAnimationjp" target="_blank">
          <img src={Y} className="youtube"></img></a>
      </header>
      <div className='sup'>
         <img className="supi"src={characterss.sup}></img>
      </div>
      <div className='imagenass'>
        <img className="something" src={characterss.Banner}></img>
      </div>
      <div className='info'>
      <h1>{characterss.name}</h1>
      <div className='infos'>
      <p>{characterss.info}</p>
      </div>
     
      <div>
        <div className='temporadas'> 
      <h1>{characterss.temp}</h1>
      <h2>año de nacimiento</h2>
      </div>
      </div>
      
      </div>
      
    </>
  );
}
