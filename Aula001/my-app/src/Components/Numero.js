import React from 'react'

export default function Numero(props){
    return(
    <>
        <p>Valor do state em numero: {props.num}</p>
        <button onClick={()=>props.setNum(props.num + 10)}>100</button>
    </>
    )
}