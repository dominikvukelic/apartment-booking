// src/components/Header.js
import React from 'react';
import './Header.css'; // ako želiš stilizaciju

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <h1 className="app-title" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
      Apartment Stoneflower
    </h1>
  );
};

export default Header;

