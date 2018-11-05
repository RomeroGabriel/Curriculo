import React, { Component } from 'react';
import Lista from './List/Lista';
import FormContact from './FormContact/FormContact';
import Languages from './Languages/Languages'
import Menu from './Menu/Menu';
import axios from 'axios';
import Presentation from './Presentation/Presentation';

class App extends Component {
  state = {
    interest: [],
    languages: [],
    imgUser: '',
    formation: [],
    exercice: [],
    skills: []
  }

  componentDidMount() {
    axios.get('https://romerogabriel.github.io/API-Curriculo/RomeroGabriel.io/json/romero.json').then(res => {
    this.setState({
        interest: res.data.interesses,
        languages: res.data.idiomas,
        imgUser: res.data.informacoes.foto,
        formation: res.data.formacao,
        exercice: res.data.atividades,
        skills: res.data.habilidades
      });
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Presentation  img={ this.state.imgUser } title={ "Apresentação" }/>
          <Lista infos={ this.state.interest } title={ 'Interesses' } />
          <Languages lang={ this.state.languages } title={ 'Idiomas' } />
          <Lista infos={ this.state.formation } title={ 'Formação' } />
          <Lista infos={ this.state.exercice } title={ 'Atividades' } />
          <Lista infos={ this.state.skills } title={ 'Habilidades' } />
          <FormContact id="contact" />
        </div>
      </div>
    );
  }
}

export default App;
