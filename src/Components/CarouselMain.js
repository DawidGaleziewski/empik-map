import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const CarouselMain = ({ merchansideList }) => {
  return (
    <Carousel>
      {merchansideList.map(merchanside => {
        const { id, itemName, imageUrl, description } = merchanside;
        return (
          <Carousel.Item key={id.toString()}>
            <img className="d-block w-100" src={imageUrl} alt={itemName} />
            <Carousel.Caption>
              <h3>{itemName}</h3>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselMain;
