import React from "react";
import Project from '../Project';


const projects = [
  {title: "Project 1"},
  {title: "Project 2"},
  {title: "Project 3"},
  {title: "Project 4"},
  {title: "Project 5"},
  {title: "Project 6"},
];

function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <div class="row">
        {projects.map(project => <Project {...project} />)}
      </div>
    </div>
  );
}

export default Projects;
