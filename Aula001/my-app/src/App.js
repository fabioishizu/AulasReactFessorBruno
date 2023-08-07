import React, { useState } from 'react'

export default function App() {

  const [nome,setNome] = useState()
  
  const armazenar = (chave,valor) => {
    localStorage.setItem(chave, valor)
  }

  const consultar = (chave,valor) => {
    alert(localStorage.getItem(chave, valor))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }

  return ( 
    <>
      <label>Digite um nome: </label><br/>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
      <button onClick={()=>armazenar('ls_nome', nome)}>Gravar nome</button>
      <button onClick={()=>consultar('ls_nome')}>Consultar nome</button>
      <button onClick={()=>apagar('ls_nome')}>Apagar nome</button>
    </>
  );
}
