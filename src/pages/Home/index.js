import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };
        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount() {
        this.loadFilmes()
    }

    loadFilmes() {
        //url da api: https://sujeitoprogramador.com/r-api/?api=filmes/
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then( (r) => r.json()) //se response deu sucesso, então vamos ter o json
        .then((json) => {
            this.setState({filmes:json}) 
        });
    }

    render() {
        return(
            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map( (filme) => {
                        return(
                            <article className="filme" key={filme.id}>
                                <strong> {filme.nome} </strong>
                                <img src={filme.foto} alt="Capa"/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    } )}
                </div>
            </div>
        );
    }
}

export default Home;