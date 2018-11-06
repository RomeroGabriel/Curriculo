import React, { Component } from 'react';
import Lista from './List/Lista';
import FormContact from './FormContact/FormContact';
import Languages from './Languages/Languages'
import Menu from './Menu/Menu';
import axios from 'axios';
import Presentation from './Presentation/Presentation';
import Blog from './Blog/Blog';
import Portfolio from './Portfolio/Portfolio';
import MoreInfo from './MoreInfo/MoreInfo';
import SocialMedia from './SocialMedia/SocialMedia';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    interest: [],
    languages: [],
    imgUser: '',
    formation: [],
    exercice: [],
    skills: [],
    Blog: [],
    Ports: [],
    More: [],
    Media: []
  }

  componentDidMount() {
    axios.get('https://romerogabriel.github.io/API-Curriculo/RomeroGabriel.io/json/romero.json').then(res => {
      this.setState({
        interest: res.data.interesses,
        languages: res.data.idiomas,
        imgUser: res.data.informacoes.foto,
        formation: res.data.formacao,
        exercice: res.data.atividades,
        skills: res.data.habilidades,
        Blog: res.data.blog,
        Ports: res.data.portfolio,
        More: res.data.MaisInformacoes,
        Media: res.data.informacoes.redes
      });
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Presentation img={this.state.imgUser} title={"Apresentação"} />
          <Lista infos={this.state.interest} title={'Interesses'} />
          <Languages lang={this.state.languages} title={'Idiomas'} />
          <Lista infos={this.state.formation} title={'Formação'} />
          <Lista infos={this.state.exercice} title={'Atividades'} />
          <Lista infos={this.state.skills} title={'Habilidades'} />
          <Blog post={this.state.Blog} />
          <Portfolio ports={this.state.Ports} />
          <MoreInfo moreInfo={this.state.More} />
          <SocialMedia media={this.state.Media} />
          <FormContact id="contact" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
