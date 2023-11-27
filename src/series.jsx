import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import esfera from "./4es.png";
import "./seriesStyle.css"; 
import ball from "./balll.png";
import db from "./db.png";
import z from "./Z.png";
import zL from "./DBZ_Logo.png";
import GT from "./GT.png";
import SP from "./super.png";
import DBH from "./DBH.png";
import DBD from "./DBD.png";
import GTB from "./GTBan.png"
import DBSB from "./DBSBan.png"
import DBB from "./DBBan.png"
import DBZB from "./DBZBan.png"
import DBHB from "./DBHBan.png"
import DBDB from "./DBDBan.png"
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"

export default function Series() {
  const { id } = useParams();
  const [seriess, setSeriess] = useState({});

  const seriesData = [
    {
      id: 1,
      nombre: 'Dragon Ball',
      sup:ball,
      Banner:DBB,
      year: '1986-1989',
      info: 'Dragon Ball, la serie de anime icónica que debutó en 1986, es un viaje épico que sigue la vida y las aventuras de Son Goku desde su infancia hasta la edad adulta. Creada por el talentoso Akira Toriyama, la serie se centra en la búsqueda de Goku para convertirse en un luchador formidable y alcanzar su máximo potencial. La trama comienza cuando Goku, un niño con una cola de mono, se encuentra con Bulma, una inventora brillante en busca de las legendarias Dragon Balls. Estas esferas mágicas, cuando se reúnen, invocan al dragón Shenlong, quien tiene el poder de conceder un deseo. Así, Goku y Bulma emprenden una emocionante búsqueda a través de tierras misteriosas y peligrosas. A lo largo de la serie, Goku se encuentra con una variedad de personajes fascinantes, desde guerreros poderosos hasta villanos astutos. Participa en el Torneo Mundial de Artes Marciales, donde la destreza de Goku en las artes marciales se pone a prueba en enfrentamientos emocionantes. La serie también explora el pasado de Goku y sus raíces Saiyan, revelando secretos y desafíos que dan forma a su destino. Con un total de 7 temporadas y 153 episodios, Dragon Ball se ha ganado su lugar como un clásico del anime. La combinación de acción emocionante, comedia encantadora y personajes inolvidables ha cautivado a audiencias de todo el mundo. La influencia duradera de Dragon Ball se refleja en su impacto en la cultura pop y su legado como una de las series de anime más queridas de todos los tiempos. La narrativa rica y la evolución de los personajes hacen de Dragon Ball una experiencia inolvidable que continúa emocionando a generaciones de fanáticos.',
      temp: '7',
      cap: '153',
    },
    {
      id: 2,
      nombre: 'Dragon Ball Z',  
      sup:z,
      Banner:DBZB,
      year: '1989-1996', 
      info: 'Dragon Ball Z, la épica continuación de Dragon Ball, lleva la historia a nuevas alturas llenas de acción y emoción. La trama se desarrolla con Goku ya adulto, revelando su verdadera naturaleza como Saiyan, una raza guerrera extraterrestre. Esta revelación da paso a la formación de los Guerreros Z, un grupo de valientes luchadores que se unen para proteger la Tierra de amenazas cada vez más poderosas. Desde la llegada de Raditz hasta enfrentamientos con villanos icónicos como Vegeta, Freezer, Cell y Majin Buu, cada arco argumental presenta desafíos épicos y batallas intensas. Goku y sus amigos superan límites inimaginables, explorando nuevos niveles de poder y transformaciones asombrosas. Además de la acción trepidante, Dragon Ball Z profundiza en temas de identidad, familia y sacrificio. Los personajes experimentan un desarrollo significativo, y detalles sobre el pasado de Goku y su conexión con los Saiyan se revelan gradualmente. La serie culmina en la batalla final contra Majin Buu, un enemigo formidable que amenaza con destruir el universo. Dragon Ball Z, con sus 9 temporadas y 291 episodios, se ha convertido en un clásico atemporal del anime. Su impacto perdurable se refleja en su lugar como una de las series más influyentes y apreciadas en la historia del anime, atrayendo a fanáticos de todas las edades con su combinación única de acción, narrativa emocionante y personajes queridos. La saga de Dragon Ball Z sigue siendo un pilar del mundo del anime, dejando un legado imborrable en la cultura popular.',
      temp: '9',
      cap: '291',
    },
    {
        id:3,
        nombre:"Dragon Ball GT",
        sup:GT,
        Banner:GTB,
        year:"1996-1997",
        info: "Dragon Ball GT, la continuación de la saga Dragon Ball Z, se sitúa en un escenario único y desafiante para nuestros héroes. La historia comienza con Goku siendo convertido nuevamente en niño debido a un deseo malinterpretado de las Dragon Balls. Junto con su nieta Pan y Trunks, se embarcan en una travesía intergaláctica para recuperar las Dragon Balls dispersas y deshacer el malentendido. A medida que avanzan en su búsqueda, enfrentan enemigos formidables como los Dragones Malignos, entidades nacidas de las Dragon Balls y que amenazan con destruir el universo. Cada Dragon Malvado representa un desafío único y poderoso para Goku y sus compañeros, llevándolos a explorar planetas desconocidos, dimensiones paralelas y enfrentarse a adversarios que desafían incluso su poder combinado. Dragon Ball GT no solo expande el alcance del viaje de nuestros héroes a través del espacio, sino que también profundiza en la conexión entre Goku, Pan y Trunks. A lo largo de la serie, se exploran temas de amistad, valentía y la voluntad de superar límites aparentemente insuperables. Con 64 episodios en tres sagas (Black Star Dragon Ball Saga, Baby Saga y Super 17 Saga), Dragon Ball GT ofrece una experiencia única dentro del universo de Dragon Ball. Aunque no está basada en el manga original de Akira Toriyama, la serie aporta su propio encanto y emoción a la epopeya de Goku y sus amigos, dejando una marca indeleble en la rica historia de Dragon Ball.",
        temp: '3',
        cap: '64',
    },
    {
        id:4,
        nombre:"Dragon Ball Super",
        sup:SP,
        Banner:DBSB,
        year:"2015-2018",
        info: "Dragon Ball Super, la continuación épica de la icónica saga Dragon Ball Z, emerge como un brillante capítulo en la historia de Goku y sus amigos. La serie, que abarca desde el año 2015 hasta 2018, trae consigo una narrativa cautivadora que lleva a nuestros héroes más allá de los límites conocidos del multiverso. La trama comienza con la aparente tranquilidad después de la derrota de Majin Buu, pero el cosmos pronto se estremece ante la llegada de Beerus, el temible Dios de la Destrucción. Este despertar marca el inicio de una odisea cósmica, llevando a Goku y sus aliados a una búsqueda implacable de poder a través de entrenamientos intensos y transformaciones asombrosas. A medida que la serie progresa, la introducción de personajes como Whis, el mentor divino, y la exploración de nuevas formas de Saiyan, como el Super Saiyan Blue, añaden capas de complejidad y emoción a la trama. La intensidad alcanza su punto álgido con la épica saga del Torneo del Poder, donde luchadores de todo el multiverso se congregan para luchar por la supervivencia de sus respectivos universos. El desarrollo de personajes en Dragon Ball Super es palpable, con Goku enfrentándose a desafíos que van más allá de la fuerza bruta, explorando la esencia misma de ser un guerrero y líder. Vegeta, por su parte, experimenta un crecimiento significativo al buscar nuevas formas de proteger a su familia y al universo. La serie no solo se centra en las impresionantes batallas cósmicas, sino que también profundiza en temas más profundos, como la moralidad, la identidad y las complejidades de la existencia. El vínculo entre los personajes adquiere una nueva dimensión, con momentos de humor, camaradería y sacrificio que resuenan en el corazón de los fanáticos. Dragon Ball Super no teme desafiar las expectativas, introduciendo conceptos como los Ángeles, los Omni-Kings y el misterioso multiverso. La película Dragon Ball Super: Broly amplía aún más la mitología al explorar los orígenes de los Saiyan, añadiendo capas adicionales a la rica historia de Dragon Ball. Con su conclusión en 2018, Dragon Ball Super deja un legado duradero en la cultura pop, demostrando que la llama de la pasión por Dragon Ball sigue ardiendo intensamente. La serie continúa siendo adorada por su acción emocionante, personajes inolvidables y exploración constante de nuevos horizontes en el vasto universo de Dragon Ball.",
        temp: '5',
        cap: '131',
    },
    {
        id:5,
        nombre:"Dragon Ball Heroes",
        sup:DBH,
        Banner:DBHB,
        year:"2018-presente",
        info: "Dragon Ball Heroes, una serie derivada que fusiona la emoción de los videojuegos con la narrativa expansiva de Dragon Ball, lleva la acción a nuevas dimensiones. Esta historia sigue a Goku y sus compañeros mientras enfrentan amenazas que desafían las leyes del tiempo y el espacio. La trama gira en torno al misterioso Planeta Prisión, donde los guerreros más poderosos de diferentes líneas temporales se reúnen para batallas épicas. El héroe principal, Beat, se encuentra con figuras familiares como Trunks y la versión malvada de Goku, Xeno Goku. Juntos, se embarcan en misiones para proteger la continuidad del tiempo y enfrentan enemigos como Fu, el manipulador del tiempo. A medida que la historia se desarrolla, se revelan nuevas formas de los personajes y fusiones emocionantes que desafían las expectativas. Dragon Ball Heroes introduce conceptos intrigantes como el Reino de la Oscuridad y la conexión con el Área Contaminada. La serie aprovecha la rica mitología de Dragon Ball para explorar realidades alternativas y desencadenar batallas que van más allá de los límites conocidos. Aunque Dragon Ball Heroes es conocido por su naturaleza no canónica y su enfoque en la acción desenfrenada, ofrece a los fanáticos de Dragon Ball la oportunidad de disfrutar de enfrentamientos épicos entre personajes queridos en contextos inesperados. La serie destaca la versatilidad y la creatividad dentro del universo Dragon Ball, manteniendo a los seguidores emocionados con cada nueva entrega.",
        temp: '1',
        cap: '53',
    },
    {
        id:6,
        nombre:"Dragon Ball Daima",
        sup:DBD,
        Banner:DBDB,
        year:"Próximamente",
        info: "Dragon Ball Daima, la próxima entrega altamente anticipada en el vasto universo de Dragon Ball, promete llevar a los fanáticos a una nueva y emocionante aventura. Aunque aún no ha sido lanzada, la serie genera expectativas significativas con la promesa de una narrativa original y cautivadora. Dragon Ball Daima se presenta como una adición fresca y única a la franquicia, introduciendo personajes inéditos y desafíos intrigantes. A medida que se avecina su lanzamiento, los seguidores de Dragon Ball esperan ansiosos explorar los nuevos mundos, enemigos y poderes que esta entrega aportará al rico tejido del universo Dragon Ball. Con una historia aún por desvelarse, Dragon Ball Daima representa una emocionante continuación de la epopeya de Goku y sus amigos. La serie se prepara para sumergir a los espectadores en un viaje lleno de acción, misterio y momentos inolvidables que contribuirán al legado duradero de Dragon Ball en el mundo del anime.",
        temp: '--',
        cap: '--',
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
         <img className="supi"src={seriess.sup}></img>
      </div>
      <div className='imagenass'>
        <img className="something" src={seriess.Banner}></img>
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
