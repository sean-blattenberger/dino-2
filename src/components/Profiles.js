import React from "react";

class Profiles extends React.Component {
  render() {
    return (
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
        </ul>
      </section>
    )
  }
}

export default Profiles;

// <div class="profile-card">
//   <header class="profile-header">
//     <img src="{{image}}" />
//     <h2>{{name}}</h2>
//   </header>
//   <section class="skills-container hidden">
//     <h4>Skills</h4>
//     <ul class="skills-list">
//       {{#each skills}}
//         <li>{{this}}</li>
//       {{/each}}
//     </ul>
//   </section>
// </div>
