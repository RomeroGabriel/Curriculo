import React from 'react';

const Presentation = ({ img, title, miniBiografia }) => {
    return (
        <div className="row">
            <h2>{ title }</h2>
            <div className="col s4 m6 l6">
                <img className="responsive-img img-User" src= { img } alt="User image"></img>
            </div>
            <div className="col s8 m6 l6">
                <p>{ miniBiografia }</p>
                <a href="https://romerogabriel.github.io/API-Curriculo/RomeroGabriel.io/pdf/Curriculo.pdf" download className="waves-effect waves-light btn"><i className="material-icons left">cloud_download</i>Download Curriculo PDF</a>
            </div>
        </div>
    );
}
export default Presentation;