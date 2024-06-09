import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { motion } from "framer-motion";
const Navigation = ({ setPage }) => {
  const [active, setActive] = useState("AboutMe");

  const handleNavClick = (page) => {
    setActive(page);
    setPage(page);
  };

  return (
    <ButtonGroup variant="text" color="inherit">
      <motion.div
        whileHover={{ scale: 1.2}}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        
      >
        <Button
          onClick={() => handleNavClick("AboutMe")}
          color={active === "AboutMe" ? "secondary" : "inherit"}
        >
          About Me
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Button
          onClick={() => handleNavClick("Portfolio")}
          color={active === "Portfolio" ? "secondary" : "inherit"}
        >
          Portfolio
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Button
          onClick={() => handleNavClick("Contact")}
          color={active === "Contact" ? "secondary" : "inherit"}
        >
          Contact
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        {" "}
        <Button
          onClick={() => handleNavClick("Resume")}
          color={active === "Resume" ? "secondary" : "inherit"}
        >
          Resume
        </Button>
      </motion.div>
    </ButtonGroup>
  );
};

export default Navigation;
