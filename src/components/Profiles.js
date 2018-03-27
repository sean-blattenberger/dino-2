import React from "react";
import Skills from "./Skills";
class Profiles extends React.Component {
  toggleSkills(event) {
    if (event.target.parentNode.classList.contains("profile-header")) {
      event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden");
    }
  }
  render() {
    return (
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
          {this.props.dinos.map((dino, i) => (
            <li key={i}>
              <div className="profile-card" onClick={this.toggleSkills}>
                <header className="profile-header">
                  <img src={dino.image} alt="Dino" />
                  <h2>{dino.name}</h2>
                </header>
                <section className="skills-container hidden">
                  <h4>Skills</h4>
                  <Skills dinoSkills={dino.skills} />
                </section>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Profiles;
