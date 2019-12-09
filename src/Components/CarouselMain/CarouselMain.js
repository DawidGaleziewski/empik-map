import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import { Carousel } from 'react-bootstrap';
import './CarouselMain.scss';

const CarouselMain = ({
  merchansideList,
  setCarouselIndexState,
  carouselIndexState,
  closeCarouselHandler,
  regionState,
  deselectLand,
  regionsList
}) => {
  // Hooks
  useEffect(() => {
    onMountUIHandler();
  }, []);

  const findRegionFullName = (regionsList, regionState) => {
    const regionName = regionsList.filter(region => {
      return region.id === regionState;
    })[0].regionFullName;

    return regionName;
  };

  const [regionNameState, setRegionNameState] = useState(
    findRegionFullName(regionsList, regionState)
  );

  // Functions
  const onMountUIHandler = () => {
    const UICarouselMain = document.getElementById('carousel-main');
    UICarouselMain.style.opacity = '1';
  };
  const onSelectHandler = (selectedIndex, event) => {
    setCarouselIndexState(selectedIndex);
  };

  return (
    <Fragment>
      <section id="carousel-main" className="carousel-main">
        {merchansideList.length > 0 ? (
          <Fragment>
            <Header
              titleText={`Dostępne w ${regionNameState}`}
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
