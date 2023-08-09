import React from 'react'

export default class Carro extends React.Component{

    constructor(props){
        super(props)
        this.modelo = "Golf"
        this.state = {
            ligado:false,
            velocidadeAtual:0,

        }
    }

    ligarDesligar() {
        this.setState({ligado: !this.state.ligado})
    }

    render(){
        return(
            <>
                <h1>Meu carro</h1>
                <p>modelo: {this.modelo}</p>
                <p>ligado: {this.state.ligado ? 'sim' : 'nao'}</p>
                <p>velocidadeAtual: {this.state.velocidadeAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>Ligar Carro</button>
            </>
        );
    }
}