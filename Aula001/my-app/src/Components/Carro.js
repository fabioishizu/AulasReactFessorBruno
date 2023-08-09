import React from 'react'

export default class Carro extends React.Component{

    constructor(props){
        super(props)
        this.modelo = "Golf"
        this.state = {
            ligado: false,
            velAtual: 0,
        }
        this.ld = this.ligarDesligar.bind(this)
    }

    ligarDesligar() {
        this.setState({ligado: !this.state.ligado})
        this.setState(
            (state)=>({
                    ligado: !this.state.ligado
                }
            )
        )
        
        // this.setState(
        //     function(state){
        //         return {ligado: !state.ligado}
        //     }
        // )


    }

    acelerar(){
        this.setState(
            (state, props)=>(
                {velAtual: state.velAtual + props.fator}
            )
        )
    }

    render(){
        return(
            <>
                <h1>Meu carro</h1>
                <p>modelo: {this.modelo}</p>
                <p>ligado: {this.state.ligado ? 'sim' : 'nao'}</p>
                <p>velocidadeAtual: {this.state.velAtual}</p>
                <button onClick={this.ld}>
                    {
                       this.state.ligado ? 'Desligar carro' : 'Ligar carro'
                    }
                </button>
                <button onClick={()=> this.acelerar()}>Acelerar</button>
            </>
        );
    }
}