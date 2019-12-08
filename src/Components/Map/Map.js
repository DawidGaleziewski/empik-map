import React from 'react';
import './Map.scss';
import Land from './Land';

const Map = ({ onClick }) => {
  const { regions } = require('./regions.json');
  console.log(regions);

  return (
    <section onClick={onClick} className="map-section">
      <svg className="map-svg" viewBox="-20 -20 650 620">
        {regions.map(regionData => {
          return <Land key={regionData.id} regionData={regionData} />;
        })}
      </svg>
    </section>
  );
};

export default Map;
