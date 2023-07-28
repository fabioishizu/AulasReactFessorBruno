import React,{useState} from 'react'

export default function App() {

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo', 'Gol']

  const [nome, setNome] = useState('Digite seu nome aqui')

  const listaCarros = carros.map( (c,i) => <li key={i}>{i} - {c}</li> )

  return ( 
    <>
      <label>Digite um nome: </label>
      <input type="text" name="fnome" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <p>{nome}</p>
    </>
  );
}
