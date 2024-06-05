// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => {
  const [page, setPage] = useState('AboutMe');

  const renderPage = () => {
    switch (page) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
