import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';

class Menu extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="black">
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li><a onClick={() => animateScrollTo(document.querySelector('#informa'))}>Informações</a></li>
                            <li className="left hide-on-med-and-down"><a onClick={() => animateScrollTo(document.querySelector('#blog'))}>Blog</a></li>
                            <li><a onClick={() => animateScrollTo(document.querySelector('#port'))}>Portfolio</a></li>
                            <li className="left hide-on-med-and-down"><a onClick={() => animateScrollTo(document.querySelector('#history'))}>Histórico</a></li>
                            <li className="left hide-on-med-and-down"><a onClick={() => animateScrollTo(document.querySelector('#social'))}>Redes Sociais</a></li>
                            <li><a onClick={() => animateScrollTo(document.querySelector('#contact'))}>Contato</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;