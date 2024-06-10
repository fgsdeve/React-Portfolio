import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import '../footer.css';

const Footer = () => (
  <AppBar
    position="static"
    color="primary"
    sx={{ top: "auto", bottom: 0, backgroundColor: "#1c1c1c" }}
  >
    <Toolbar className="footer-content">
      <Typography variant="body1" color="inherit">
        &copy; {new Date().getFullYear()} FgsDeve
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Link
          href="https://github.com/fgsdeve"
          color="inherit"
          target="_blank"
          rel="noopener"
          sx={{ display: "flex", alignItems: "center", mr: 3 }}
        >
          <GitHub
            sx={{
              fontSize: 40,
              "&:hover": {
                color: "#ff4081",
                transform: "scale(1.2)",
                transition: "transform 0.3s",
              },
            }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/germanogarcia/"
          color="inherit"
          target="_blank"
          rel="noopener"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <LinkedIn
            sx={{
              fontSize: 40,
              "&:hover": {
                color: "#ff4081",
                transform: "scale(1.2)",
                transition: "transform 0.3s",
              },
            }}
          />
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Footer;
