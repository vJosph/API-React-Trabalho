import React from "react";

export default class Jojo extends React.Component {
    state = {
        loading: true,
        personagens: undefined,
        aleatorio: undefined
    }


    render() {

        if (this.state.loading)
            return (<h1>Carregando ...</h1>)

        const aleatorio = this.state.aleatorio;
        const personagem = this.state.personagens[aleatorio];

        return (
            <div className="container">
                <div className="d-flex flex-column align-items-center mb-3">
                <button onClick={() => this.setState({ aleatorio: Math.floor(Math.random() * this.state.personagens.length) })}>Randomize</button>
                    <span className="h1">{personagem.nome}</span>                    
                        <img src={personagem.imagem} height="250px" width="300px" alt={personagem.nome} />
                        <span className="text pt-2 col-sm-2">{personagem.mensagem}</span>                   
                </div>

            </div>
        )
    }



    async componentDidMount() {
        const url = 'https://raw.githubusercontent.com/ViniJosph/jsonBizarreAdventures/main/jojoFrase.json';
        const response = await fetch(url);
        const data = await response.json();
        const personagens = data.frases;
        console.log(personagens.length)

        this.setState({
            loading: false,
            personagens: personagens,
            aleatorio: Math.floor(Math.random() * personagens.length)
        })
    }
};