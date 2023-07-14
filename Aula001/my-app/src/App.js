import React,{useState} from 'react'
import Numero from './Components/Numero'
import './App.css'

function App() {
  
  let n1=10

  const [num,setNum] = useState(n1)
  
  return (
    <>
      Valor do state em app: {num}
      <Numero num={num} setNum={setNum}/>
    </>
  );
}

export default App;
