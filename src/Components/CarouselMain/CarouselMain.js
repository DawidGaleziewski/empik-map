import React, { useEffect, Fragment } from 'react';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
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
  // Hooks
  useEffect(() => {
    onMountUIHandler();
  }, []);

  // Functions
  const onMountUIHandler = () => {
    const UICarouselMain = document.getElementById('carousel-main');
    const UICarouselMask = document.getElementById('carousel-mask');
    UICarouselMain.style.opacity = '1';
    UICarouselMask.style.opacity = '0.5';
  };
  const onSelectHandler = (selectedIndex, event) => {
    setCarouselIndexState(selectedIndex);
  };

  const closeCarouselHandler = () => {
    deselectLand(regionState);
    setRegionState(null);
  };

  return (
    <Fragment>
      <div
        onClick={closeCarouselHandler}
        id="carousel-mask"
        className="carousel-mask"
      ></div>
      <section id="carousel-main" className="carousel-main">
        {/* Render carousel if there are any items to show */}
        {merchansideList.length > 0 ? (
          <Fragment>
            <Header
              titleText={'Dostępne w Twoim województwie'}
              closeCarouselHandler={closeCarouselHandler}
            />
            <Carousel
              slide={true}
              activeIndex={carouselIndexState}
              onSelect={onSelectHandler}
            >
              {/* Render one slide per item */}
              {merchansideList.map(merchanside => {
                const { id, itemName, imageUrl, description } = merchanside;
                return (
                  <Carousel.Item className="carousel-item" key={id.toString()}>
                    <ImageCarousel src={imageUrl} alt={itemName} />
                    <Carousel.Caption className="carousel-item__caption">
                      <h3>{itemName}</h3>
                      <p>{description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Fragment>
        ) : (
          // Inform no items are available for region
          <Header
            titleText={'Brak promocji w Twoim województwie'}
            closeCarouselHandler={closeCarouselHandler}
          />
        )}
      </section>
    </Fragment>
  );
};

export default CarouselMain;
