import React from 'react';

const Languages = ({ lang, title }) => {

    const List = lang.length ?
        (
            lang.map(l => {
                return <li className="collection-item">{ l.idioma }  - Nível: { l.nivel }</li>
            })
        ) : (
            <li className="collection-item">Sem informações</li>
        )

    return (
        <div className="col s12 m6 l6">
            <ul className="collection with-header">
                <li className="collection-header black"><h4 className="white-text">{title}</h4></li>
                {List}
            </ul>
        </div>
    )
};

export default Languages;