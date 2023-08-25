import React, { useState } from 'react'
import Globais from './Components/Globais'
import Info from './Components/Info'

export default function App() {

  const [resumo, setResumo] = useState();

  const gravarResumo = () => {
    Globais.resumo = resumo;
  }

  const verResumo = () =>{
    alert(Globais.resumo)
  }

  return ( 
    <>
      <Info/>
      <hr/>
      <p>{'Canal: '+ Globais.canal}</p>
      <p>{'Curso: '+ Globais.curso}</p>
      <p>{'Ano: '+ Globais.ano}</p>
      <hr/>
      <input type="text" size='100' value={resumo} onChange={(e) => setResumo(e.target.value)}>{resumo}</input>
      <button onClick={()=>gravarResumo()}>Gravar resumo</button>
      <button onClick={()=>verResumo()}>verResumo</button>
    </>
  );
}
