import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './components/pages/Login.jsx';
import Cadastrar from './components/pages/Cadastrar.jsx';
import Home from './components/pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar/>,
  },
  {
    path: "/home",
    element: <Home/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
