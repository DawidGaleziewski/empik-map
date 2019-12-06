import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselMain = ({
  merchansideList,
  setCarouselIndexState,
  carouselIndexState
}) => {
  const onSelectHandler = (selectedIndex, event) => {
    setCarouselIndexState(selectedIndex);
  };
  return (
    <section>
      {merchansideList.length > 0 ? (
        <Fragment>
          <h2>Dostępne w Twoim województwie</h2>
          <Carousel activeIndex={carouselIndexState} onSelect={onSelectHandler}>
            {merchansideList.map(merchanside => {
              const { id, itemName, imageUrl, description } = merchanside;
              return (
                <Carousel.Item key={id.toString()}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={itemName}
                  />
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
        <h2>Brak promocji na tym terenie</h2>
      )}
    </section>
  );
};

export default CarouselMain;
