import React from "react";
import { Typography, Box, Container } from "@mui/material";
import "../portfolio.css"; // Ensure this file contains the required styles
import backgroundVideo from "../video/mainpage.mp4"; // Import the video file

const Home = () => {
  return (
    <Container sx={{ color: "#fff", py: 11 }}>
      <Box className="about-me-container">
        <video autoPlay muted loop className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box className="about-me-content" textAlign="center" mt={4}>
          <Typography variant="body1" mt={2} fontSize={20}>
            I'm Francisco, a front-end developer with a strong foundation in
            modern web technologies, acquired through my training at The
            University of Texas at Austin. With a background in sales and team
            management, I bring a unique blend of technical skills and
            interpersonal expertise. Fluent in five languages and experienced in
            international environments, I'm eager to contribute to dynamic
            teams.
          </Typography>
          <Typography variant="body1" mt={2} fontSize={20}>
            I specialize in creating efficient and scalable web applications
            with a focus on front-end development. My skills include HTML, CSS,
            JavaScript, React.js, and responsive design. Driven by a passion for
            problem-solving and user experience, I continuously strive to stay
            updated with the latest tech advancements.{" "}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
