import React, { Component } from "react";
import "../App.css";
import Profiles from "../components/Profiles"
import dinoLogo from "../assets/g-dino.png";

const Header = () => {
  return (
  <header>
    <img src={dinoLogo} alt="Dinosaur Logo" />
  </header>
  )
};
const Footer = () => {
  return (
    <footer>
      <small>Copyright 2018</small>
    </footer>
  );
};

class App extends Component {
  state = {
    dinosaurs: []
  }
  fetchDinos() {
    fetch('./dinosaurs.json').then(res => res.json()).then(data => {
      this.setState({ dinosaurs: data });
    })
  }
  componentDidMount() {
    this.fetchDinos();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profiles dinosaurs={this.state.dinosaurs} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
