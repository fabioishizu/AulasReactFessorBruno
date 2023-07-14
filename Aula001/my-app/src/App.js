import React,{useState} from 'react'
import Led from './Components/Led'

export default function App() {

  const [led,setLed] = useState(false)

  const cancelar = (obj) =>{
    return obj.preventDefault()
  }

  return (
    <>
      <Led led={led} setLed={setLed}/>
      <a href="https://youtube.com/cfbcursos" target='_blank' onClick={(e)=>cancelar(e)}>qlqcoisa</a>
    </>
  );
}
