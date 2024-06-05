import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, } from '@mui/icons-material';

const Footer = () => (
  <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
      <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
        &copy; {new Date().getFullYear()} FgsDeve
      </Typography>
      <Link href="https://github.com/fgsdeve" color="inherit" target="_blank" rel="noopener">
        <GitHub />
      </Link>
      <Link href="https://www.linkedin.com/in/germanogarcia/" color="inherit" target="_blank" rel="noopener" sx={{ ml: 2 }}>
        <LinkedIn />
      </Link>
    </Toolbar>
  </AppBar>
);

export default Footer;