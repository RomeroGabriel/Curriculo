import React, { Component } from 'react';
import './formContact.css'
class FormContact extends Component {

    state = {
        name: null,
        email: null,
        topic: null,
        message: null
    };

    changeValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    formSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <div className="row">
                <h2 className="center">Entre em contato!</h2>
                <form className="formContact-form" onSubmit={ this.formSubmit }>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" onChange={ this.changeValue }></input>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={ this.changeValue }></input>
                    
                    <label htmlFor="topic">Assunto:</label>
                    <input type="text" id="topic" onChange={ this.changeValue }></input>

                    <label htmlFor="message">Mensagem:</label>
                    <input type="text" id="message" onChange={ this.changeValue }></input>

                    <button >Enviar</button>
                </form>
            </div>
        );
    };
};

export default FormContact;