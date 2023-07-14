import React from 'react'
import LedVerde from './imgs/ledverde.png'
import LedVermelho from './imgs/ledvermelho.png'

export default function Led(props) {
  return (
    <>
    <img style={{width:'50px'}} src={props.led?LedVerde:LedVermelho}/>
    <button onClick={()=>props.setLed(!props.led)}>Ligar/Desligar</button>
    </>
  );
}
