import React, { useEffect, Fragment } from 'react';
import ImageCarousel from './ImageLazyLoad';
import { Carousel } from 'react-bootstrap';
import './CarouselMain.scss';

const CarouselMain = ({
  merchansideList,
  setCarouselIndexState,
  carouselIndexState,
  setRegionState,
  regionState,
  deselectLand
}) => {
  const onSelectHandler = (selectedIndex, event) => {
    setCarouselIndexState(selectedIndex);
  };

  const closeSectionHandler = () => {
    deselectLand(regionState);
    setRegionState(null);
  };

  useEffect(() => {
    const UICarouselMain = document.getElementById('carousel-main');
    const UICarouselMask = document.getElementById('carousel-mask');
    UICarouselMain.style.opacity = '1';
    UICarouselMask.style.opacity = '0.5';
  }, []);

  return (
    <Fragment>
      <section id="carousel-main" className="carousel-main">
        <button
          onClick={closeSectionHandler}
          type="button"
          className="close btn-close-carousel"
        >
          <span aria-hidden="true">×</span>
        </button>
        {merchansideList.length > 0 ? (
          <Fragment>
            <h2 className="main-header">Dostępne w Twoim województwie</h2>
            <Carousel
              slide={true}
              activeIndex={carouselIndexState}
              onSelect={onSelectHandler}
            >
              {merchansideList.map(merchanside => {
                const { id, itemName, imageUrl, description } = merchanside;

                return (
                  <Carousel.Item key={id.toString()}>
                    <ImageCarousel src={imageUrl} alt={itemName} />
                    <Carousel.Caption>
                      <h3>{itemName}</h3>
                      <p>{description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Fragment>
        ) : (
          <h2 className="main-header">Brak promocji na tym terenie</h2>
        )}
      </section>
      <div
        onClick={closeSectionHandler}
        id="carousel-mask"
        className="carousel-mask"
      ></div>
    </Fragment>
  );
};

export default CarouselMain;
