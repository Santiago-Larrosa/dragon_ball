import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import esfera from "./4es.png";
import BOG from "./BOG.png"
import ROF from "./ROF.png"
import DBSB from "./DBSB.png"
import DBSSH from "./DBSSH.png"
import BOGB from "./BOGBan.png"
import ROFB from "./ROFBan.png"
import DBSBB from "./DBSBBan.png"
import DBSSHB from "./DBSSHBan.png"
import "./seriesStyle.css"; 


export default function Movies() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const moviesData = [
    {
        id:1,
      nombre: "DBZ: La Batalla de los dioses",
      sup:BOG,
      Banner:BOGB,
      temp: "1h 45min",
      year: "2013",
      info: "Dragon Ball Z: La Batalla de los Dioses es una película de animación japonesa creada por Akira Toriyama. Estrenada en 2013, se sitúa después de los eventos de Dragon Ball Z y antes de Dragon Ball Super. La trama sigue al dios de la destrucción Bills, quien, despertando de su sueño, decide visitar la Tierra. Los guerreros Z se preparan para enfrentarlo, pero descubren que Bills es poderoso. Destacan las épicas peleas y la transformación de Goku en Super Saiyan God. La película equilibra la acción con momentos cómicos, ofreciendo a los fanáticos una experiencia cinematográfica emocionante que expande la mitología de Dragon Ball y destaca la superación personal.",
    },
    {
        id:2,
      nombre: "DBZ: La Resurrección de Freezer",
      sup:ROF,
      Banner:ROFB,
      temp: "1h 33min",
      year: "2015",
      info: "Dragon Ball Z: La Resurrección de Freezer continúa la historia después de la derrota de Majin Buu. Sorbet, un seguidor de Freezer, busca las Esferas del Dragón para revivir a su líder. Freezer regresa con sed de venganza, y los guerreros Z deben enfrentarse nuevamente a uno de los villanos más icónicos de la serie. La película ofrece intensas batallas y momentos emotivos, con la resurrección de personajes familiares y la introducción de nuevos desafíos para Goku y sus amigos.",
    },
    {
        id:3,
      nombre: "DBS: Broly",
      sup:DBSB,
      Banner:DBSBB,
      temp: "1h 41min",
      year: "2018",
      info: "Dragon Ball Super: Broly es una película que forma parte del canon de Dragon Ball Super. Presenta la historia del Saiyan legendario, Broly, y explora su conexión con Goku y Vegeta. La trama revela eventos del pasado de los Saiyan y lleva a los guerreros Z a enfrentarse a un enemigo formidable. La película destaca por sus impresionantes secuencias de acción y por expandir el lore de Dragon Ball, añadiendo nuevos elementos al universo de la serie.",
    },
    {
        id:4,
      nombre: "DBS: Super Hero",
      sup:DBSSH,
      Banner:DBSSHB,
      temp: "1h 40min",
      year: "2022",
      info: "Hace mucho tiempo que Goku acabó con la malvada organización del Ejército del Listón Rojo; sin embargo, ¡su voluntad perduró! Ahora que están de regreso, crearon a los nuevos androides Gamma Número 1 y Gamma Número 2, y comenzaron así su venganza. Piccolo pronto se entera de esta actividad perturbadora, y se infiltra a la base del Listón Rojo, ¡pero una vez allí descubre la existencia del arma del mal definitiva! Pan es secuestrada para atraer a Gohan a la base. Al llegar, él también se une a la acción, ¡¡¡y así comienza una superbatalla sin precedentes!!! ¿Qué pasará en este duelo a muerte? ¿Y cuál será el destino que le depara a la Tierra?",
    },
  ];
  

  


  useEffect(() => {
    const foundMovies = moviesData.find((ser) => ser.id === parseInt(id));
    if (foundMovies) {
      setMovies(foundMovies);
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
      </header>
      <div className='sup'>
         <img className="supi"src={movies.sup}></img>
      </div>
      <div className='imagenass'>
        <img className="something" src={movies.Banner}></img>
      </div>
      <div className='info'>
      <h1>{movies.nombre}</h1>
      <div className='infos'>
      <p>{movies.info}</p>
      </div>
     
      <div>
        <div className='temporadas'> 
      <h1>{movies.temp}</h1>
      <h2>Duracion</h2>
      </div>
      </div>
      
      </div>
      
    </>
  );
}
