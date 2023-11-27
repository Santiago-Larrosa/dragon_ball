import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import Plus from "./plus.png"
import "./blog.css"
import esfera from "./4es.png";

export default function Root() {
  const [comentarios, setComentarios] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate(); // Agrega useNavigate

  useEffect(() => {
    const DownAdmin = localStorage.getItem("admin");
    setAdmin(JSON.parse(DownAdmin));
    setShowButton(admin);
  }, [admin]);

  useEffect(() => {
    const comentariosJson = localStorage.getItem("comentarios");

    if (comentariosJson) {
      const comentariosArray = JSON.parse(comentariosJson);
      setComentarios(comentariosArray);
    }
  }, []);

  const HandleClick = (id) => {
    const updatedComentarios = comentarios.filter((comentario) => comentario.id !== id);
    setComentarios(updatedComentarios);
    localStorage.setItem("comentarios", JSON.stringify(updatedComentarios));
  };

  const handleVerMasClick = (id) => {
    navigate(`/coment/${parseInt(id)}`); // Navega a la página específica
  };

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
          <div className="ahh">
           <a href="/new"><img src={Plus} className="mas"></img></a> 
          </div>
      </header>

      <div className="sidebar">
        <div>
          <form method="post"></form>
        </div>
        <nav></nav>

        <div className="EsteDiv">
          <ul>
            {comentarios.map((comentario, index) => (
              <div key={index} className="Post">
                <h2 className="">{comentario.nombre}</h2>
                <h1 className="TituloPost">{comentario.Titulo}</h1>
                {comentario.archivo && (
                  <img 
                    src={comentario.archivo.dataURL}  // asumimos que el campo archivo es un objeto con la propiedad dataURL
                    alt={comentario.archivo.name}
                    style={{ width:`${window.innerWidth >= 600 ? 90 : 50}%`, borderRadius:`${window.innerWidth >= 600 ? 25 : 5}px`}}
                  />
                )}
                <p>{comentario.hora}:{comentario.minutos}:{comentario.segundos}</p>
                <button className="Boton" onClick={() => handleVerMasClick(comentario.id)}>VER MAS</button>
                {showButton && (
                  <button className="Borrar" onClick={() => HandleClick(comentario.id)}>BORRAR</button>
                )}
               
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}