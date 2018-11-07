import React from 'react';

const Skills = ({ skills, title }) => {
    const styles = { marginLeft: '1rem', border: '1px solid white', padding:'5px' };
    const styles2 = { padding:'1rem' };
    const infos = skills.length ?
        (
            skills.map(i => {
                return <span className="white-text" style={ styles }>{i} </span>
            })
        ) : (
            <span className="white-text">Sem informações</span>
        )

    return (
        <div className="row black">
            <div className="col s12 m12 l12" style= { styles2 }>
                <h2 className="white-text center"> {title} </h2>
                {infos}
            </div>
        </div>
    );
};

export default Skills;