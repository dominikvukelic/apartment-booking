import React from 'react';

const ContentRenderer = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {content.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5em' }}>
            {typeof item === 'object' && item.naziv ? (
              <div>
                <strong>{item.naziv}:</strong>
                <ContentRenderer content={item.sadržaj} />
              </div>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    );
  } else if (typeof content === 'object' && content !== null) {
    return (
      <div>
        {Object.entries(content).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '1em' }}>
            <strong>{formatKey(key)}:</strong>
            <ContentRenderer content={value} />
          </div>
        ))}
      </div>
    );
  } else {
    return <span>{content}</span>;
  }
};

const formatKey = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

export default ContentRenderer;
