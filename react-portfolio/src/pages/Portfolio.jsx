import React from 'react';
import Project from '../components/Project';
/* import { Container, Grid, Box, Typography } from '@mui/material';
 */import '../portfolio.css';
import Employee_jpg from '../img/Employee.jpg' 
import react_jpg from '../img/react.jpg';
import JATE_png from '../img/JATE.png';
import tech_blog_jpg from '../img/tech-blog.jpg';
import weather_jpg from '../img/weather.jpg';
import Social_NetworkAPI_jpg from '../img/Social Network API.jpg';


const projects = [
  {
    title: 'React Portfolio',
    image: react_jpg,
    deployedLink: 'https://github.com/fgsdeve/React-Portfolio',
    repoLink: 'https://github.com/fgsdeve/React-Portfolio',
  },
  {
    title: 'PWA Text Editor',
    image: JATE_png,
   /*  deployedLink: 'https://pwa-text-editor-db8k.onrender.com/',  */
    repoLink: 'https://github.com/fgsdeve/-PWA-Text-Editor',
  },
  {
    title: 'Tech Blog',
    image: tech_blog_jpg,
/*     deployedLink: 'https://github.com/fgsdeve/Tech-Blog',
 */    repoLink: 'https://github.com/fgsdeve/Tech-Blog',
  },
  {
    title: 'Weather Forecast',
    image: weather_jpg,
    deployedLink: 'https://github.com/fgsdeve/Weather-Forecast',
    repoLink: 'https://github.com/fgsdeve/Weather-Forecast',
  },
  {
    title: 'Social Network API',
    image: Social_NetworkAPI_jpg,
    deployedLink: 'https://drive.google.com/file/d/1TGJf20U-baaEk84j2ueAbizA7Pz_gvaD/view?usp=sharing.',
    repoLink: 'https://github.com/fgsdeve/social-network-api',
  },
  {
    title: 'SQL Employee Tracker',
    image:Employee_jpg,
    deployedLink: 'https://drive.google.com/file/d/1dq_g5w0ap8R7u6ANK5zsz4y1O1epjGfR/view',
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
