import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
//import Games from"./games"
import Movies from"./movies"
import MoviesList from "./moviesList"
import Series from"./series"
import SeriesList from "./seriesList"
//import Characters from"./characters"
import Root from "./root";
import Imagen3 from "./DBSSH.png"
import Imagen4 from "./super.png"
import Imagen1 from "./fondo_1.png"
import Imagen2 from "./fondo_2.png"
const images = [Imagen1,Imagen2,Imagen3,Imagen4]

const router = createBrowserRouter ([
{
  path: "" ,
  element: <Root images={images}/>,
},
{
path:"/serieslist",
element: <SeriesList/>,
},
{
path:"/movieslist",
element:<MoviesList/>,
},
/*{
  path: "/games",
  element: <Games/>
},*/
{
  path: "/movies/:id",
  element: <Movies/>
},
{
  path: "/series/:id",
  element: <Series/>
},
/*
{
  path: "/characters",
  element: <Characters/>
},*/
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


