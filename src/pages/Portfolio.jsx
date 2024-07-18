import React from 'react';
import Project from '../components/Project';
import '../portfolio.css';
import Employee_jpg from '../img/Employee.jpg' 
import react_jpg from '../img/react.jpg';
import Rent_Ride from '../img/Rent_Ride.webp';
import tech_blog_jpg from '../img/tech-blog.jpg';
/* import weather_jpg from '../img/weather.jpg';
 */import Social_NetworkAPI_jpg from '../img/Social Network API.jpg';


const projects = [
  {
    title: 'React Portfolio',
    image: react_jpg,
    deployedLink: 'https://main--fgsdevportfolio.netlify.app/',
    repoLink: 'https://github.com/fgsdeve/React-Portfolio',
  },
  {
    title: 'Rent&Ride',
    image: Rent_Ride,
    deployedLink: 'https://rent-ride-jzpq.onrender.com/',  
    repoLink: 'https://github.com/14jjfenlason/car-rental.git',
  },

  {
    title: 'MERN Book Search Engine',
    image: tech_blog_jpg,
     deployedLink: 'https://mern-book-search-engine-2-1cso.onrender.com/',
    repoLink: 'https://github.com/fgsdeve/MERN-Book-Search-Engine.git',
  },
 /*  {
    title: 'Weather Forecast',
    image: weather_jpg,
    deployedLink: 'https://github.com/fgsdeve/Weather-Forecast', 
    repoLink: 'https://github.com/fgsdeve/Weather-Forecast',
  }, */
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
    
    <div className="projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
