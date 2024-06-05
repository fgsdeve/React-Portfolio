// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'React Portfolio',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://github.com/fgsdeve/React-Portfolio', 
    repoLink: 'https://github.com/fgsdeve/React-Portfolio',
  },
  {
    title: 'PWA Text Editor',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://github.com/fgsdeve/PWA-Text-Editor',
    repoLink: 'https://github.com/fgsdeve/PWA-Text-Editor',
  },
  {
    title: 'Tech Blog',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://github.com/fgsdeve/Tech-Blog',
    repoLink: 'https://github.com/fgsdeve/Tech-Blog',
  },
  {
    title: 'Weather Forecast',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://github.com/fgsdeve/Weather-Forecast',
    repoLink: 'https://github.com/fgsdeve/Weather-Forecast',
  },
  {
    title: 'Social Network API',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://github.com/fgsdeve/social-network-api',
    repoLink: 'https://github.com/fgsdeve/social-network-api',
  },
  {
    title: 'SQL Employee Tracker',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://github.com/fgsdeve/SQL-Employee-Tracker',
    repoLink: 'https://github.com/fgsdeve/SQL-Employee-Tracker',
  }
];

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
