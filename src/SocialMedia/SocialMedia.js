import React from 'react';
import GitHub from '../GitHub.png'
import Linkedin from '../Linkedin.png'
import './SocialMedia.css';

const SocialMedia = ({ media }) => {
    return (
        <div className="row" id="social">
            <h2 className="center">Redes Sociais</h2>
            <div className="col s12 m6 l6">
                <div className="center">
                    <a href={media.gitHub}><img className="responsive-img media" src={GitHub} alt="GitHub"></img></a>
                </div>
            </div>
            <div className="col s12 m6 l6">
                <div className="center">
                    <a href={media.linkedin}><img className="responsive-img media" src={Linkedin} alt="linkedin"></img></a>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;