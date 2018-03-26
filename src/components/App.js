import React, { Component } from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <small>Copyright 2018</small>
    </footer>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <section>
            <h2>Job Listings</h2>
            <ul id="job-listings" />
          </section>
          <aside id="side-bar">
            <h3>Add a Job</h3>
            <form class="job-form">
              <label for="title">Title</label>
              <input type="text" name="title" />
              <label for="pay">Compensation</label>
              <input type="text" name="pay" />
              <label for="description">Description</label>
              <textarea name="description" rows="8" cols="40" />
              <input type="submit" name="submit" value="Submit" />
            </form>
          </aside>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
