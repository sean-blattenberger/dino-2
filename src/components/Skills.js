import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <ul className="skills-list">
        {this.props.dinoSkills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    );
  }
}

export default Skills;
