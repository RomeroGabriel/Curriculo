import React from 'react';
import GitHub from '../GitHub.png'
import linkedin from '../Linkedin.png'
import './SocialMedia.css';

const SocialMedia = ({ Linkedin, Github }) => {
    return (
        <div className="row" id="social">
            <h2 className="center">Redes Sociais</h2>
            <div className="col s12 m6 l6">
                <div className="center">
                    <a href={Github}><img className="responsive-img media" src={GitHub} alt="GitHub"></img></a>
                </div>
            </div>
            <div className="col s12 m6 l6">
                <div className="center">
                    <a href={Linkedin}><img className="responsive-img media" src={linkedin} alt="linkedin"></img></a>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;