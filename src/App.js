import React, { Component } from 'react';
import Lista from './List/Lista';
import FormContact from './FormContact/FormContact';
import Menu from './Menu/Menu';
import axios from 'axios';

class App extends Component {
  state = {
    habilidades: [
      { info: 'Lindo', id: 0 },
      { info: 'Gostoso', id: 1 },
      { info: 'Cabelo', id: 2 }
    ],
    languages: []
  }

  componentDidMount(){
    axios.get('').then(res => {
      console.log(res)
;    }); 
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Lista infos={ this.state.habilidades } title={ 'Habilidades' } />
          <Lista infos={ this.state.languages } title={ 'Idiomas' } />
          <FormContact id="contact" />
        </div>
      </div>
    );
  }
}

export default App;
