import React,{useState} from 'react'
import Caixa from './Components/Caixa'
import Canal from './Components/Canal'

export default function App() {

  return ( 
    <>
      <Caixa site="teste.com">
        <Canal/>
        <p>curso de react</p>
      </Caixa>
    </>
  );
}
