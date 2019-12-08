import React, { Fragment, useState, useEffect, useRef } from 'react';
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

const Container = () => {
  // Hooks
  const [regionState, setRegionState] = useState(null);
  const onClickHandler = event => {
    selectLand(event);
  };
  const [merchandiseState, setMerchandiseState] = useState([]);
  const [carouselIndexState, setCarouselIndexState] = useState(0);

  // Fetch data regarding selected region
  useEffect(() => {
    axios.get('/api/merchandise').then(({ data }) => {
      setMerchandiseState(filterMerchandise(data, regionState));
    });
  }, [regionState]);

  // Functions
  const selectLand = clickEvent => {
    const {
      target: { id }
    } = clickEvent;
    if (id.match(/^(PL-)/)) {
      const UILand = document.getElementById(id);
      UILand.classList.toggle('land-toggled');
      setRegionState(id);
      setCarouselIndexState(0);
    }
  };
  const deselectLand = regionState => {
    const UIPreviousLand = document.getElementById(regionState);
    if (UIPreviousLand) {
      UIPreviousLand.classList.toggle('land-toggled');
    }
  };

  return (
    <Fragment>
      <header>
        <NavMain />
      </header>

      <main className="main">
        <h1 className="main-header">Empik lokalne promocje</h1>
        <Map onClick={onClickHandler} />

        {/* Render carousel only if the region was selected */}
        {regionState ? (
          <CarouselMain
            regionState={regionState}
            setRegionState={setRegionState}
            carouselIndexState={carouselIndexState}
            setCarouselIndexState={setCarouselIndexState}
            merchansideList={[...merchandiseState]}
            deselectLand={deselectLand}
          />
        ) : null}
      </main>
    </Fragment>
  );
};

export default Container;
