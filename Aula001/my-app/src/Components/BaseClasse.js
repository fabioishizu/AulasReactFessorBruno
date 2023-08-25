import React from 'react'

export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            canal: "cfb cursos",
            curso: "React",
            ativo: true,
            nome: this.props.nomeAluno
        }
        
        this.status = this.props.status

        //bindagem
        let ad= ativarDesativar.bind(this)

        //Instruções do construtor
    }

    ativarDesativar(){
        this.setState(
            state=>({
                    ativo:!state.ativo
            })
        )
    }
    
    componentDidMount(){
        console.log('O componente foi criado')
    }

    componentDidUpdate(){
        console.log('O componente foi atualizado')
    }

    componentWillUnmount(){
        console.log('O componente foi removido')
    }

    render(){
        return(
            <>
                <h1>Componente de classe</h1>
                <button onClick={this.ad}>Ativar Desativar</button>
            </>
        )
    }
    
}