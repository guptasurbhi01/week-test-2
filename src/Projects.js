// Projects.js
import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://example.com/project2",
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
