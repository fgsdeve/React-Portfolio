// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={image} alt={title} className="project-image" />
    <div>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  </div>
);

export default Project;
