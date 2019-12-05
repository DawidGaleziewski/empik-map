import React, { Fragment } from 'react';
import NavMain from './Components/NavMain';
import CarouselMain from './Components/CarouselMain';
import Map from './Components/Map';

const Container = () => {
  return (
    <Fragment>
      <NavMain />
      <h1>Sprawdź nasze lokalne promocje.</h1>
      <Map />
      {/* <CarouselMain /> */}
    </Fragment>
  );
};

export default Container;
