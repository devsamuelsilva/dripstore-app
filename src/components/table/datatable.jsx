import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'descricao', headerName: 'Descrição', width: 300 },
    { field: 'desconto', headerName: 'Desconto', type: 'number', width: 90 },
    { field: 'preco', headerName: 'Preço', type: 'number', width: 90 },
    { field: 'ativo', headerName: 'Ativo', type: 'boolean', width: 90 },
    { field: 'categoria', headerName: 'Categoria', width: 150 },
    { field: 'data_cadastro', headerName: 'Data de Cadastro', type: 'date', width: 150 },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get('https://dripstore-api-0r61.onrender.com/api/produto');
          const formattedData = response.data.map((item) => ({
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            desconto: item.desconto,
            preco: item.preco,
            ativo: item.ativo,
            categoria: item.categoria,
            data_cadastro: new Date(item.data_cadastro), // Convert data string to Date object
          }));
          setData(formattedData);
        };
    
        fetchData();
      }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
