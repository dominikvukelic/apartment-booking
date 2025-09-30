import React, { useState } from 'react';
import ContentRenderer from './ContentRenderer';

const ApartmentDetails = ({ details }) => {
  const [openSections, setOpenSections] = useState(new Set());

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => {
      const newOpenSections = new Set(prevOpenSections);
      if (newOpenSections.has(section)) {
        newOpenSections.delete(section);
      } else {
        newOpenSections.add(section);
      }
      return newOpenSections;
    });
  };

  return (
    <div className="apartment-details">
      {Object.entries(details).map(([section, content]) => (
        <div key={section} className="section">
          <h3
            onClick={() => toggleSection(section)}
            style={{ cursor: 'pointer' }}
          >
            {formatKey(section)} {openSections.has(section) ? '-' : '+'}
          </h3>
          {openSections.has(section) && <ContentRenderer content={content} />}
        </div>
      ))}
    </div>
  );
};

const formatKey = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

export default ApartmentDetails;
