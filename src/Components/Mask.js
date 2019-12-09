import React from 'react';
import './Mask.scss';

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
