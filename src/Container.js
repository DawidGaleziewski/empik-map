import React, { Fragment, useState, useEffect } from 'react';
import NavMain from './Components/NavMain';
import CarouselMain from './Components/CarouselMain';
import Map from './Components/Map';
import axios from 'axios';

const filterMerchandiseForRegion = (merchandiseList, regionID) => {
  merchandiseList.filter(merchandise => {
    return merchandise.availableInRegions.contains(regionID);
  });
};

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
  const [merchandiseState, setMerchandiseState] = useState([]);
  useEffect(() => {
    axios.get('/api/merchandise').then(({ data }) => {
      setMerchandiseState(data);
      console.log(merchandiseState);
    });
  }, [regionState]);

  return (
    <Fragment>
      <NavMain />
      <h1>Sprawdź nasze lokalne promocje.</h1>
      <Map onClick={onClickHandler} />
      {regionState ? (
        <CarouselMain merchansideList={[...merchandiseState]} />
      ) : null}
    </Fragment>
  );
};

export default Container;
