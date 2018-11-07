import React from 'react';

const Lista = ({ infos, title }) => {

    const infoList = infos.length ?
        (
            infos.map(i => {
                return <li className="collection-item">{i}</li>
            })
        ) : (
            <li className="collection-item">Sem informações</li>
        )

    return (
        <div className="col s12 m6 l6">
            <ul className="collection with-header">
                <li className="collection-header black"><h4 className="white-text">{title}</h4></li>
                {infoList}
            </ul>
        </div>
    )
};

export default Lista;