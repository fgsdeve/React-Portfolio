import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Navigation from './Navigation';

const Header = ({ setPage }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
      </Typography>
      <Navigation setPage={setPage} />
    </Toolbar>
  </AppBar>
);

export default Header;
