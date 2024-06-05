import React, { useState } from 'react';

const Navigation = ({ setPage }) => {
  const [active, setActive] = useState('AboutMe');

  const handleNavClick = (page) => {
    setActive(page);
    setPage(page);
  };

  return (
    <nav>
      <ul>
        <li className={active === 'AboutMe' ? 'active' : ''} onClick={() => handleNavClick('AboutMe')}>About Me</li>
        <li className={active === 'Portfolio' ? 'active' : ''} onClick={() => handleNavClick('Portfolio')}>Portfolio</li>
        <li className={active === 'Contact' ? 'active' : ''} onClick={() => handleNavClick('Contact')}>Contact</li>
        <li className={active === 'Resume' ? 'active' : ''} onClick={() => handleNavClick('Resume')}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
