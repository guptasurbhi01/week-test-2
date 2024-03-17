// ProjectItem.js
import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      <a
        href={project.url}
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        Visit Project
      </a>
    </div>
  );
};

export default ProjectItem;
