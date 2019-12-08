import React from 'react';
import './Header.scss';

const Header = ({ titleText, closeCarouselHandler }) => {
  return (
    <header className="carousel-main__header">
      <h2 className="carousel-main__title"> {titleText}</h2>
      <button
        onClick={closeCarouselHandler}
        type="button"
        className="close btn-close-carousel"
      >
        <span aria-hidden="true">×</span>
      </button>
    </header>
  );
};

export default Header;
