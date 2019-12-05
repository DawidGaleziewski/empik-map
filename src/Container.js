import React, { Fragment, useState } from 'react';
import NavMain from './Components/NavMain';
import CarouselMain from './Components/CarouselMain';
import Map from './Components/Map';

const Container = () => {
  const [regionState, setRegionState] = useState(null);
  const onClickHandler = event => {
    const {
      target: { id },
      target: { classList }
    } = event;

    if (id.match(/^(PL-)/)) {
      classList.toggle('land-toggled');
      setRegionState(id);
      console.log(id);
      console.log(regionState);
    }
  };

  return (
    <Fragment>
      <NavMain />
      <h1>Sprawdź nasze lokalne promocje.</h1>
      <Map onClick={onClickHandler} />
      <CarouselMain />
    </Fragment>
  );
};

export default Container;
