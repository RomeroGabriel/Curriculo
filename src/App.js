import React, { Component } from 'react';
import './index.css';
import './reset.css';
import Lista from './List/Lista';
import FormContact from './FormContact/FormContact'

class App extends Component {
  state = {
    habilidades: [
      { info: 'Lindo', id: 0 },
      { info: 'Gostoso', id: 1 },
      { info: 'Cabelo', id: 2 }
    ]
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <ul>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="content">
          <h2 className="titles">Habilidades</h2>
          <Lista infos={this.state.habilidades} />
        </div>

        <FormContact id="contact" />
      </div>
    );
  }
}

export default App;
