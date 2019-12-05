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
      {/* 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://lorempixel.com/400/200/technics/5/"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://lorempixel.com/400/200/technics/5/"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselMain;
