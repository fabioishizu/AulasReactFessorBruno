import React from 'react';
import Dados from './Dados';

const canal = () => {return 'CanalCurso123'};
const yt = 'youtube.com/qlqcoisa';
const crs = 'React';

const soma = (v1,v2) => {
    return v1+v2;
}

const textoDestaque={
    color:'red',
    fontSize:'3em',
}

export default function Body(){
    return(
        <section>
            <h2 style={textoDestaque}>Curso React</h2>
            <p>Descrição do curso . . .</p>
            <Dados canal={soma(1,1)} youtube={yt} curso={crs}/>
        </section>
    )
}