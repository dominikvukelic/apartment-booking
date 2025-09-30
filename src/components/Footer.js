import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Datoteka za stilizaciju

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/hecticbrah" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* Dodajte druge društvene ikone prema potrebi */}
      </div>
      <div className="footer-links">
      {/*  <a href="/kontakt">Kontakt</a>
        <a href="/uvjeti-koristenja">Uvjeti korištenja</a>
        <a href="/politika-privatnosti">Politika privatnosti</a> */}
      </div>
      <p>&copy; {new Date().getFullYear()} Apartment Stoneflower. Sva prava pridržana.</p>
    </footer>
  );
}

export default Footer;
