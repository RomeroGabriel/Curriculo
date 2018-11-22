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
import Skills from './Skills/Skills';

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
        imgUser: res.data.informacoes.foto,
        Blog: res.data.blog,
        Ports: res.data.portfolio,
        More: res.data.MaisInformacoes,
        Media: res.data.informacoes.redes
      });
    });

    axios.get('http://localhost:3001/formacao/getAll').then(res => {
      this.setState({
        formation: res.data.map(d => d.informacao)
      });
    });

    axios.get('http://localhost:3001/interesse/getAll').then(res => {
      this.setState({
        exercice: res.data.map(d => d.informacao)
      });
    });

    axios.get('http://localhost:3001/atividade/getAll').then(res => {
      this.setState({
        interest: res.data.map(d => d.informacao)
      });
    });

    axios.get('http://localhost:3001/idioma/getAll').then(res => {
      this.setState({
        languages: res.data
      });
    });

    axios.get('http://localhost:3001/habilidade/getAll').then(res => {
      this.setState({
        skills: res.data.map(d => d.habilidade)
      });
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Presentation img={this.state.imgUser} title={"Apresentação"} />
          <div className="row">
            <h2 id="informa">Informações</h2>
            <Lista infos={this.state.interest} title={'Interesses'} />
            <Languages lang={this.state.languages} title={'Idiomas'} />
            <Lista infos={this.state.formation} title={'Formação'} />
            <Lista infos={this.state.exercice} title={'Atividades'} />
          </div>

          <Skills skills={this.state.skills} title={'Habilidades'} />
          <Blog post={this.state.Blog} />
          <Portfolio ports={this.state.Ports} />
          <MoreInfo moreInfo={this.state.More} />
          <SocialMedia media={this.state.Media} />
          <FormContact />
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
