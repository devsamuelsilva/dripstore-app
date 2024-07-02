import { useEffect, useState } from "react";
//import "./App.css";
//import { Button, Stack } from "react-bootstrap";
import DataTable from "./components/table/datatable.jsx";
import axios from "axios";

function App() {
  const getProdutos = async () => {
    const URL_PRODUTOS = 'https://dripstore-api-0r61.onrender.com/api/produto'
    try {
      const result = await axios.get(URL_PRODUTOS)
      console.log(result.data);
    } catch (error) {
      console.log(`Error ao buscar o produto: ${error}`);
    }
  }
  
  useEffect(() => {
    getProdutos();
  }, [])

  return (
    <>
      
    </>
  );
}

export default App;
