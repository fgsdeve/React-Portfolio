import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const Header = ({ setPage }) => {
  const theme = useTheme();

  const styles = {
    link: {
      color: theme.palette.primary.contrastText,
      margin: "0 10px",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
    activeLink: {
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      margin: "0 10px",
    },
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "center" }}>
        <motion.div whileHover={{ scale: 1.5 }}>
          <Button onClick={() => setPage("AboutMe")} sx={styles.link}>
            Home
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.5 }}>
          <Button onClick={() => setPage("Portfolio")} sx={styles.link}>
            Portfolio
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.5 }}>
          <Button onClick={() => setPage("Contact")} sx={styles.link}>
            Contact
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.5 }}>
          <Button onClick={() => setPage("Resume")} sx={styles.link}>
            Resume
          </Button>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
