import React, { useState } from 'react';
import './App.css';
import { apartment } from './data/ApartmentData';
import ImageDisplay from './components/ImageDisplay';
import ApartmentDetails from './components/ApartmentDetails';
import OurLocation from './components/OurLocation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  const toggleContactFormVisibility = () => {
    setIsContactFormVisible(!isContactFormVisible);
  };

  return (
    <div className="app-container">
      <Header />
      <ImageDisplay imageUrl={apartment.imageUrl} altText={apartment.altText} />
      <h2 onClick={toggleInfoVisibility} style={{ cursor: 'pointer' }}>
        Informacije o objektu
      </h2>
      {isInfoVisible && <ApartmentDetails details={apartment.details} />}
      <OurLocation />
      <h2 onClick={toggleContactFormVisibility} style={{ cursor: 'pointer' }}>
        Kontaktirajte nas
      </h2>
      {isContactFormVisible && <ContactForm />}
      <Footer />
    </div>
  );
}

export default App;
