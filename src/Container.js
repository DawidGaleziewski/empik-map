import React, { Fragment, useState, useEffect } from 'react';
import './Container.scss';
import NavMain from './Components/NavMain';
import CarouselMain from './Components/CarouselMain';
import Map from './Components/Map';
import axios from 'axios';

const filterMerchandise = (merchandiseList, regionID) => {
  return merchandiseList.filter(merchandise => {
    return merchandise.availableInRegions.includes(regionID);
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
      const UIPreviousLand = document.getElementById(regionState);
      if (UIPreviousLand) {
        UIPreviousLand.classList.toggle('land-toggled');
      }

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
        {!regionState ? <Map onClick={onClickHandler} /> : null}

        {regionState ? (
          <CarouselMain
            merchansideList={[...merchandiseState]}
            setCarouselIndexState={setCarouselIndexState}
            carouselIndexState={carouselIndexState}
          />
        ) : null}
      </main>
    </Fragment>
  );
};

export default Container;
