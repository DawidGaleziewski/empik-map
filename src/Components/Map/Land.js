import React from 'react';

const Land = ({ regionData }) => {
  const { id, regionFullName, svgPathDraw } = regionData;
  return (
    <a className="land" title={regionFullName}>
      <path d={svgPathDraw} id={id} />
    </a>
  );
};

export default Land;
