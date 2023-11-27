import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import "./comment.css"
import esfera from "./4es.png";

export default function Coment() {
  const { id } = useParams();
  const [comentariosDelComentario, setComentariosDelComentario] = useState([]);
  let idNumero = parseInt(id);
  const [comentarios, setComentarios] = useState([]);
  const [comentarioSeleccionado, setComentarioSeleccionado] = useState(null);
  const [nombreComentario, setNombreComentario] = useState("");
  const [mensajeComentario, setMensajeComentario] = useState("");
  const [contadorID, setContadorID] = useState(1);
  const [admin, setAdmin] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const DownAdmin = localStorage.getItem("admin");
    setAdmin(JSON.parse(DownAdmin));
    setShowButton(admin);
  }, [admin]);

  if (isNaN(idNumero)) {
    console.error("ID proporcionado no es un número válido:", id);
  }

  useEffect(() => {
    const comentariosJson = localStorage.getItem("comentarios");
    if (comentariosJson) {
      const comentariosArray = JSON.parse(comentariosJson);
      setComentarios(comentariosArray);
      setComentarioSeleccionado(comentariosArray.find(c => c.id === parseInt(id)));
    }
  }, []);

  useEffect(() => {
    const comentariosDelComentarioJson = localStorage.getItem(`comentariosDelComentario-${id}`);
    if (comentariosDelComentarioJson) {
      const comentariosDelComentarioArray = JSON.parse(comentariosDelComentarioJson);
      setComentariosDelComentario(comentariosDelComentarioArray);
    }
  }, [id]);

  const handleAgregarComentario = (e) => {
    e.preventDefault();

    const nuevoComentario = {
      nombre: nombreComentario,
      mensaje: mensajeComentario,
      id: `${id}-${contadorID}`, 
    };

    setContadorID(contadorID + 1);

    const nuevosComentariosDelComentario = [...comentariosDelComentario, nuevoComentario];
    setComentariosDelComentario(nuevosComentariosDelComentario);
    setNombreComentario("");
    setMensajeComentario("");

    localStorage.setItem(`comentariosDelComentario-${id}`, JSON.stringify(nuevosComentariosDelComentario));
  };

  const handleBorrarComentario = (comentarioId) => {
    const comentariosActualizados = comentariosDelComentario.filter((comentario) => comentario.id !== comentarioId);
    setComentariosDelComentario(comentariosActualizados);

    localStorage.setItem(`comentariosDelComentario-${id}`, JSON.stringify(comentariosActualizados));
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
           
          </div>
      </header>
      <div>
        {comentarioSeleccionado ? (
          <div className="ElSuperDiv">
            <div className="PostComent">
              <b className="negro"> {comentarioSeleccionado.nombre}</b><br />
              <Markdown remarkPlugins={[remarkGfm]}>{comentarioSeleccionado.mensaje}</Markdown>
              {comentarioSeleccionado.archivo && (
                <img
                  src={comentarioSeleccionado.archivo.dataURL}
                  alt={comentarioSeleccionado.archivo.name}
                  style={{ maxWidth: '70%' }}
                />
              )}
            </div>

            <form onSubmit={handleAgregarComentario}>
              <div>
                <label htmlFor="nombre"></label>
                <input
                  className="InNom"
                  placeholder="Nombre"
                  type="text"
                  id="nombre"
                  value={nombreComentario}
                  onChange={(e) => setNombreComentario(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="mensaje"></label>
                <textarea
                  placeholder="Mensaje"
                  className="InMens"
                  id="mensaje"
                  value={mensajeComentario}
                  onChange={(e) => setMensajeComentario(e.target.value)}
                />
              </div>
              <button className="Botonation">Enviar Comentario</button>
            </form>

            <div>
              <h2 className="EsUnComentario">Comentarios:</h2>
              <div className="AAA">
                {comentariosDelComentario.map((comentario) => (
                  <li key={comentario.id} className="Coment">
                    <strong >{comentario.nombre}</strong> <br></br>{comentario.mensaje}<br></br>
                    {showButton && (
                      <button onClick={() => handleBorrarComentario(comentario.id)} className="Borrarr">Borrar</button>
                    )}
                  </li>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p >El comentario no se encontró o no existe: {id}</p>
        )}
      </div>
    </>
  );
}