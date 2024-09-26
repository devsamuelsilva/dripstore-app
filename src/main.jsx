import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './components/pages/Login.jsx';
import Cadastrar from './components/pages/Cadastrar.jsx';
import Home from './components/pages/Home.jsx';
import axios from 'axios';

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

// Set config defaults when creating the instance
axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  headers: {
    'Content-Type': 'application/json', // ou o tipo de conteúdo que você precisar
  },
});

//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
