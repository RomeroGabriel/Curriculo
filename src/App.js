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
    Media: [],
    miniBiografia: [],
    completaBio: [],
    contatoProfissao: []
  }

  componentDidMount() {
    axios.get('https://romerogabriel.github.io/API-Curriculo/RomeroGabriel.io/json/romero.json').then(res => {
      this.setState({
        imgUser: res.data.informacoes.foto,
        Blog: res.data.blog,
      });
    });

    axios.get('http://localhost:3001/port/getAll').then(res => {
      console.log(res.data);
      this.setState({
        Ports: res.data
      });
    });

    axios.get('http://localhost:3001/rede/getLast').then(res => {
      this.setState({
        Linkedin: res.data.linkedin,
        Github: res.data.github
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

    axios.get('http://localhost:3001/biografia/getLast').then(res => {
      this.setState({
        miniBiografia: res.data.mini,
        completaBio: res.data.inteira
      });
    });

    axios.get('http://localhost:3001/contatoProfissao/getLast').then(res => {
      this.setState({
        contatoProfissao: res.data.profissao
      });
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Presentation img={this.state.imgUser} title={"Apresentação"} miniBiografia= { this.state.miniBiografia } />
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
          <MoreInfo completaBio={ this.state.completaBio } contatoProfissao={ this.state.contatoProfissao } />
          <SocialMedia Linkedin={ this.state.Linkedin } Github={ this.state.Github }/>
          <FormContact />
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
