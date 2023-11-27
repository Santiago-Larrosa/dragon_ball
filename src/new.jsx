import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import T from "./twitter.png"
import Y from "./youtube.png"
import I from "./instagram1.png"
import Plus from "./Home.png"
import "./new.css"
import esfera from "./4es.png";

function TuComponente() {
  const [nombre, setNombre] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const fechaInicial = new Date();
  const [hora, sethora] = useState(fechaInicial);
  const navigate = useNavigate();
  const [button, setButton] = useState(true);
  const [contador, setContador] = useState(() => {
    const storedContador = localStorage.getItem('contador');
    return storedContador ? parseInt(storedContador) : 1;
  });

  // Función para convertir Blob a Data URL
  const blobToDataURL = (blob, callback) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      callback(e.target.result);
    };
    reader.readAsDataURL(blob);
  };

  // Función para almacenar comentarios en localStorage
  const saveComentarios = () => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  };

  // Función para manejar la carga de archivos
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convertir el archivo a Data URL antes de almacenarlo
      blobToDataURL(file, (dataURL) => {
        setArchivo({ name: file.name, dataURL });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevahora = new Date();
    sethora(nuevahora);
    const nuevahoras = nuevahora.getHours().toString().padStart(2, '0');
    const nuevaminuto = nuevahora.getMinutes().toString().padStart(2, '0');
    const nuevasegundos = nuevahora.getSeconds().toString().padStart(2, '0');

    const nuevoComentario = {
      nombre,
      mensaje,
      Titulo,
      archivo,
      id: contador,
      hora: nuevahoras,
      minutos: nuevaminuto,
      segundos: nuevasegundos,
    };

    setContador((prevContador) => prevContador + 1);
    localStorage.setItem('contador', contador + 1);
    setComentarios([...comentarios, nuevoComentario]);
    setNombre('');
    setMensaje('');
    setTitulo('');
    setArchivo(null);
    setButton(false);
    setTimeout(() => {
      navigate("/blog");
    }, 1000);
  };

  useEffect(() => {
    if (comentarios.length) {
      saveComentarios();
      // Mueve la navegación aquí
    }
  }, [comentarios]);

  useEffect(() => {
    const storedComentarios = JSON.parse(localStorage.getItem('comentarios'));
    if (storedComentarios) {
      setComentarios(storedComentarios);
    }
  }, []);

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
      {button ?
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="Nombre" htmlFor="nombre"></label>
              <input
                className='InNombre'
                type="text"
                id="nombre"
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label className="Titulor" htmlFor="Titulo"></label>
              <input
                className='InTitulo'
                type="text"
                id="titulo"
                placeholder='Titulo'
                value={Titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div>
              <label className="Posting" htmlFor="mensaje"></label>
              <textarea
                className='InPost'
                id="mensaje"
                placeholder='Post'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>
            <div className='archivos'>
              
  <label className="Posting" htmlFor="archivo" style={{margin:"20px"}}></label>
  <input style={{margin:"20px"}}
    className="FileLabel"
    type="file"
    id="archivo"
    onChange={handleFileChange}
  />
</div>
            <button className='botonazo' >Crear <br></br>Post</button>
          </form>
        </div> : <h1>Mensaje Enviado</h1>}
    </>
  );
}

export default TuComponente;