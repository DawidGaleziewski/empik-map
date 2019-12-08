import React, { Fragment, useState, useEffect } from 'react';
import './Container.scss';
import NavMain from './NavMain/NavMain';
import CarouselMain from './CarouselMain/CarouselMain';
import Map from './Map/Map';
import axios from 'axios';

const filterMerchandise = (merchandiseList, regionID) => {
  return merchandiseList.filter(merchandise => {
    return merchandise.availableInRegions.includes(regionID);
  });
};

const deselectLand = regionState => {
  const UIPreviousLand = document.getElementById(regionState);
  if (UIPreviousLand) {
    UIPreviousLand.classList.toggle('land-toggled');
  }
};

const Container = () => {
  const [regionState, setRegionState] = useState(null);
  const onClickHandler = event => {
    const {
      target: { id },
      target: { classList }
    } = event;

    if (id.match(/^(PL-)/)) {
      const UILand = document.getElementById(id);
      UILand.classList.toggle('land-toggled');
      setRegionState(id);
      setCarouselIndexState(0);
    }
  };
  const [merchandiseState, setMerchandiseState] = useState([]);
  useEffect(() => {
    axios.get('/api/merchandise').then(({ data }) => {
      setMerchandiseState(filterMerchandise(data, regionState));
    });
  }, [regionState]);

  const [carouselIndexState, setCarouselIndexState] = useState(0);

  return (
    <Fragment>
      <header>
        <NavMain />
      </header>

      <main className="main">
        <h1 className="main-header">Empik lokalne promocje</h1>
        <Map onClick={onClickHandler} />

        {regionState ? (
          <CarouselMain
            merchansideList={[...merchandiseState]}
            setCarouselIndexState={setCarouselIndexState}
            carouselIndexState={carouselIndexState}
            setRegionState={setRegionState}
            regionState={regionState}
            deselectLand={deselectLand}
          />
        ) : null}
      </main>
    </Fragment>
  );
};

export default Container;
