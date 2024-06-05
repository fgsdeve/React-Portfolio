import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';

const Navigation = ({ setPage }) => {
  const [active, setActive] = useState('AboutMe');

  const handleNavClick = (page) => {
    setActive(page);
    setPage(page);
  };

  return (
    <ButtonGroup variant="text" color="inherit">
      <Button onClick={() => handleNavClick('AboutMe')} color={active === 'AboutMe' ? 'secondary' : 'inherit'}>About Me</Button>
      <Button onClick={() => handleNavClick('Portfolio')} color={active === 'Portfolio' ? 'secondary' : 'inherit'}>Portfolio</Button>
      <Button onClick={() => handleNavClick('Contact')} color={active === 'Contact' ? 'secondary' : 'inherit'}>Contact</Button>
      <Button onClick={() => handleNavClick('Resume')} color={active === 'Resume' ? 'secondary' : 'inherit'}>Resume</Button>
    </ButtonGroup>
  );
};

export default Navigation;
