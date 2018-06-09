import React, { Component } from "react";
import "../App.css";
import Profiles from "../components/Profiles";
import Header from "../components/Header";
import Footer from "../components/Footer";



class App extends Component {
  state = {
    dinosaurs: []
  }
  fetchDinos() {
    return fetch('./dinosaurs.json').then(res => res.json()).then(data => {
      this.setState({ dinosaurs: data });
      return data;
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
          <Profiles dinos={this.state.dinosaurs} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
