import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
//import Games from"./games"
//import Movies from"./movies"
//import Series from"./series"
import Characters from"./characters"
import Root from "./root";

const router = createBrowserRouter ([
{
  path: "" ,
  element: <Root/>,
},
{
  path: "/games",
  element: <Games/>
},
{
  path: "/movies",
  element: <Movies/>
},
{
  path: "/series",
  element: <Series/>
},
{
  path: "/characters",
  element: <Characters/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
