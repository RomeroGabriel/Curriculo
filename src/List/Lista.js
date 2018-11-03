import React from 'react';
import './List.css';

const Lista = ({ infos }) => {
    const infoList = infos.map(i => {
        return i.id > 0 ?
            (
                <li>{i.info}</li>
            ) : null;
    });

    return (
        <div className="list">
            <ul>
                {infoList}
            </ul>
        </div>
    )
};

export default Lista;