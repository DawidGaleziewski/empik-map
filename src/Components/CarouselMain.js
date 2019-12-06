import React, { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const CarouselMain = ({ merchansideList }) => {
  return (
    <section>
      {merchansideList.length > 0 ? (
        <Fragment>
          <h2>Dostępne w Twoim województwie</h2>
          <Carousel>
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
