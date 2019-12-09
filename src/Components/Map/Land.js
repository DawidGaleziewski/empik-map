import React from 'react';

/**
 * Returns a single svg path drawing one region on the map
 */
const Land = ({ regionData }) => {
  const { id, regionFullName, svgPathDraw } = regionData;
  return (
    <a className="land" title={regionFullName}>
      <path d={svgPathDraw} id={id} />
    </a>
  );
};

export default Land;
