import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import esfera from "./4es.png";
import "./seriesStyle.css"; 
import ball from "./balll.png";
import db from "./db.png";
import z from "./Z.png";
import zL from "./DBZ_Logo.png";

export default function Series() {
  const { id } = useParams();
  const [seriess, setSeriess] = useState({});

  const seriesData = [
    {
      id: 1,
      nombre: 'Dragon Ball',
      year: '1986-1989',
      info:
      "'Dragon Ball' se centra en Son Goku, que después de la muerte de su abuelo, conoce a Bulma, la hija de uno de los científicos más brillantes del mundo. Ella le invita a hacer una gran búsqueda de siete esferas de las legendarias Dragon Balls, que al ser reunidas dan lugar a la aparición del dragón sagrado que puede conceder cualquier deseo, pero solo uno. Mientras tanto, un gran torneo mundial de artes marciales, Tenkaichi Budokai, que se realiza cada tres años, en el que los mejores luchadores de todo el mundo se darán cita batiéndose en duelo para alzarse con el título del luchador más fuerte sobre la Tierra. Más adelante se encontrarán con Piccolo Daimao, originando una batalla para proteger la Tierra y el universo entero, a través de continuas batallas contra villanos cada vez más poderosos e investigando el origen de Goku y las Dragon Balls. La serie está basada en los mangas del dibujante Akira Toriyama con un total de 7 temporadas y 159 episodios.",
      img:ball,
      temp: '7',
      cap: '153',
    },
    {
      id: 2,
      nombre: 'Dragon Ball Z',  
      year: '1989-1996', 
      info: 'Dragon Ball Z es la continuación de Dragon Ball, siguiendo las aventuras de Son Goku como adulto. Después de la llegada de Raditz, el hermano de Goku, se revela la verdadera naturaleza de Goku como Saiyan, una raza guerrera alienígena. Esto lleva a la formación de los Guerreros Z, un grupo de luchadores poderosos que se unen para proteger la Tierra. A lo largo de la serie, los Guerreros Z enfrentan amenazas cada vez más poderosas, como Vegeta, Freezer, Cell y Majin Buu. Cada arco argumental presenta intensas batallas y desafíos, con Goku y sus amigos superando límites para proteger su hogar. Además de las batallas épicas, Dragon Ball Z explora temas como la identidad, la familia y el sacrificio. Los personajes experimentan un desarrollo significativo, y se revelan detalles sobre el pasado de Goku y su conexión con los Saiyan. La serie culmina en la batalla final contra Majin Buu, un ser extremadamente poderoso y destructivo. A medida que la serie llega a su conclusión, destaca la importancia de la unidad y la fuerza interior para superar desafíos. Dragon Ball Z se ha convertido en un clásico del anime, apreciado por su acción emocionante, personajes memorables y temas universales.',
      temp: '9',
      cap: '291',
    },
  ];

  useEffect(() => {
    const foundSeries = seriesData.find((ser) => ser.id === parseInt(id));
    if (foundSeries) {
      setSeriess(foundSeries);
    } else {
      console.error(`No se encontró la serie con id ${id}`);
      
    }
  }, [id]);

  return (
    <>
     <header className="head">
     <a href={'/'}><img src={esfera} className="ball" alt="Esfera del Dragón" /></a>
        <h1 className="dragon">
          <b>Dragon Ball WIKI</b>
        </h1>
      </header>
      <div style={{borderRadius:"50%"}}className='imagenass'>
        <img className="something" src={seriess.img}></img>
      </div>
      <div className='info'>
      <h1>{seriess.nombre}</h1>
      <div className='infos'>
      <p>{seriess.info}</p>
      </div>
     
      <div>
        <div className='temporadas'> 
      <h1>{seriess.temp}</h1>
      <h2>Temporadas</h2>
      </div>
      </div>
      <div className='capitulos'>
      <h1 >{seriess.cap}</h1>
      <h2>Capitulos</h2>
      </div>
      
      </div>
      
    </>
  );
}
