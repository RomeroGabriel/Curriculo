import React from 'react';

const Lista = ({ infos, title }) => {

    const infoList = infos.length ?
        (
            infos.map(i => {
                return i.id > 0 ?
                    (
                        <li className="collection-item">{i.info}</li>
                    ) : null;
            })
        ) : (
            <li className="collection-item">Sem informações</li>
        )

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header black"><h4 className="white-text">{title}</h4></li>
                {infoList}
            </ul>
        </div>
    )
};

export default Lista;