import React from 'react';

const Presentation = ({ img, title }) => {
    return (
        <div className="row">
            <h2>{ title }</h2>
            <div className="col s4 m6 l6">
                <img className="responsive-img img-User" src= { img } alt="User image"></img>
            </div>
            <div className="col s8 m6 l6">
                <p>Olá, meu nome é Gabriel Romero e atualmente sou estudante de Engenharia de Software pela UTFPR de Cornélio Prócopio. Neste site você terá a oportunidade de me conhecer um pouco melhor, espero que goste.</p>
                <a href="https://romerogabriel.github.io/API-Curriculo/RomeroGabriel.io/pdf/Curriculo.pdf" download className="waves-effect waves-light btn"><i className="material-icons left">cloud_download</i>Download Curriculo PDF</a>
            </div>
        </div>
    );
}
export default Presentation;