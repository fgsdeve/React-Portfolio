import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import avatar from '../img/portfolio.jpg';  // Correct path to the image

const AboutMe = () => (
  <Box textAlign="center" mt={4}>
    <Avatar
      alt="Developer's Avatar"
      src={avatar}
      sx={{ width: 465, height: 495, margin: ' auto' }}
    />
    <Typography variant="h4" component="h2" mt={2}>About Me</Typography>
    <Typography variant="body1" mt={2}>
      Welcome to my portfolio! I am Francisco, a junior front-end developer with a background in sales and team management. Currently attending The Coding Boot Camp at UT Austin, I have developed a strong foundation in modern web technologies. Fluent in five languages and with international experience, I am ready to contribute to your team.
    </Typography>
    <Typography variant="body1" mt={2}>
      I have a passion for creating efficient and scalable web applications, with a focus on front-end development. My journey into software development has been fueled by my desire to solve problems and create impactful user experiences. My front-end skills include HTML, CSS, JavaScript, React.js, and responsive design. I am always eager to learn new skills and technologies to stay up-to-date in the ever-evolving tech landscape.
    </Typography>
  </Box>
);

export default AboutMe;
