import React from 'react';

const Menu = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper black">
                <div className="container">
                    <ul className="left">
                        <li><a href="#">Informações</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfólio</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;