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
  componentDidMount() {
    fetch('./dinosaurs.json').then(res => res.json()).then(data => {
      this.setState({
        dinosaurs: data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profiles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
