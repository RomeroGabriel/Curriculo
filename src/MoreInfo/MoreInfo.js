import React from 'react';

const moreInfor = ({ completaBio, contatoProfissao }) => {
    const infos = 
        (<div>
            <div className="col s12 m6 l6">
                <h2 className="black-text">Biografia</h2>
                <p>{ completaBio }</p>
            </div>
            <div className="col s12 m6 l6">
                <h2 className="black-text">Contato com a profissão</h2>
                <p>{ contatoProfissao }</p>
            </div>
        </div>
        )

    return (
        <div className="row grey lighten-1" id="history">
            <h2 className="blue-text lighten-1 center">Mais Informações</h2>
            {infos}
        </div>
    );
};

export default moreInfor;