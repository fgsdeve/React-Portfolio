import React from "react";
import { Typography, Avatar, Box, Container } from "@mui/material";
import avatar from "../img/portfolio.jpg"; 

const AboutMe = () => (
  <Container sx={{ backgroundColor: "#000", color: "#fff", py: 9 }}>
    <Box textAlign="center" mt={4}>
      <Box
        component="img"
        alt="Developer's Avatar"
        src={avatar}
        sx={{ width: 465, height: 465, margin: "auto" }}
        className="animate"
      />
      <Typography variant="h4" component="h2" mt={2} sx={{ color: "#ce93d8" }}>
        About Me
      </Typography>
      <Typography variant="body1" mt={2} fontSize={20}>
        Welcome to my portfolio! I am Francisco, a junior front-end developer
        with a background in sales and team management. Currently attending The
        Coding Boot Camp at UT Austin, I have developed a strong foundation in
        modern web technologies. Fluent in five languages and with international
        experience, I am ready to contribute to your team.
      </Typography>
      <Typography variant="body1" mt={2} fontSize={20}  >
        I have a passion for creating efficient and scalable web applications,
        with a focus on front-end development. My journey into software
        development has been fueled by my desire to solve problems and create
        impactful user experiences. My front-end skills include HTML, CSS,
        JavaScript, React.js, and responsive design. I am always eager to learn
        new skills and technologies to stay up-to-date in the ever-evolving tech
        landscape.
      </Typography>
    </Box>
  </Container>
);

export default AboutMe;
