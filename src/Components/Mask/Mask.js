import React from 'react';
import './Mask.scss';

/**
 * Blocks rest of the site from beeing clickable after region was selected
 */
const Mask = ({ closeCarouselHandler }) => {
  return (
    <div
      onClick={closeCarouselHandler}
      id="carousel-mask"
      className="carousel-mask"
    ></div>
  );
};

export default Mask;
