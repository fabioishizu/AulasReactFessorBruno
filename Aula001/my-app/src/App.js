import React,{useState} from 'react'

export default function App() {

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo', 'Gol']

  const listaCarros = carros.map( (c,i) => <li key={i}>{i} - {c}</li> )

  return ( 
    <>
      {listaCarros}
    </>
  );
}
