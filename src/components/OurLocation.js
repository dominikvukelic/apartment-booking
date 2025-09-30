import React, { useState } from 'react';

const OurLocation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="location-section">
      <h2 onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        Kako do nas
      </h2>
      {isVisible && (
        <iframe
          title="Lokacija apartmana"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5643.587114826941!2d14.900803539086919!3d44.988504721562684!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shr!2shr!4v1743756935865!5m2!1shr!2shr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default OurLocation;

