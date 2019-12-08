import React, { useEffect, Fragment } from 'react';
import ImageCarousel from './ImageLazyLoad';
import { Carousel } from 'react-bootstrap';
import './CarouselMain.scss';

const CarouselMain = ({
  merchansideList,
  setCarouselIndexState,
  carouselIndexState,
  setRegionState
}) => {
  const onSelectHandler = (selectedIndex, event) => {
    setCarouselIndexState(selectedIndex);
  };

  const closeSectionHandler = () => {
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
      <div
        onClick={closeSectionHandler}
        id="carousel-mask"
        className="carousel-mask"
      ></div>
      <section id="carousel-main" className="carousel-main">
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
    </Fragment>
  );
};

export default CarouselMain;
