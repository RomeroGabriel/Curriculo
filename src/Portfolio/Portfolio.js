import React from 'react';

const Portfolio = ({ ports }) => {
    const portfolios = ports.length ?
        (
            ports.map(p => {
                return (
                    <div className="col s12 m12 l12">
                        <div className="card">
                            <div className="card-content">
                                <h4>{p.title}</h4>
                                <p>{p.date}</p>
                                <div className="divider"></div>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })
        ) :
        (
            <p className="center">Sem postagens ainda</p>
        )

    return (
        <div className="row grey lighten-1" id="port">
            <h2 className="blue-text lighten-1">Portfolio</h2>
            {portfolios}
        </div>
    );
};

export default Portfolio;