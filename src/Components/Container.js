import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Style
import './Container.scss';

// Components
import Mask from './Mask/Mask';
import NavMain from './NavMain/NavMain';
import CarouselMain from './CarouselMain/CarouselMain';
import Map from './Map/Map';
import Description from './Description/Description';
import Footer from './Footer/Footer';

// @ts-ignore
const { regions: regionsList } = require('../data/regions.json');

/**
 * filterMerchandise - filters out region selected on the map
 * @param {Array<object>} merchandiseList
 * @param {String} regionID - state changing via on click event on the map
 * @returns {Array<object>}
 */
const filterMerchandise = (merchandiseList, regionID) => {
  return merchandiseList.filter(merchandise => {
    return merchandise.availableInRegions.includes(regionID);
  });
};

/**
 * Bootstraping all components
 */
const Container = () => {
  /**
   *  @typedef {(String|Null)} regionState - stores currently selected region on map
   */
  const [regionState, setRegionState] = useState(null);
  const onClickHandler = event => {
    selectLand(event);
  };
  /**
   * @typedef {Array.<Object>} merchandiseState - stores array of objects. Items for sale.
   */
  const [merchandiseState, setMerchandiseState] = useState([]);
  /**
   * @typedef {{Number}} carouselIndexState - stores current slide index on carousel
   */
  const [carouselIndexState, setCarouselIndexState] = useState(0);

  /**
   * Fetch data with all merchendise.
   */
  useEffect(() => {
    axios.get('/merchandise.json').then(({ data }) => {
      const { merchandise } = data;
      setMerchandiseState(filterMerchandise(merchandise, regionState));
    });
  }, [regionState]);

  /**
   * selectLand - Operations done after region is clicked on map
   * @param {Event} clickEvent
   * @returns {void}
   */
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

  /**
   * deselectLand - Operations done after region is clicked on map, deselecting the old region
   * @param {String} regionState
   * @returns {void}
   */
  const deselectLand = regionState => {
    const UIPreviousLand = document.getElementById(regionState);
    if (UIPreviousLand) {
      UIPreviousLand.classList.toggle('land-toggled');
    }
  };

  /**
   * Clears all actions regarding previously selected region
   */
  const closeCarouselHandler = () => {
    deselectLand(regionState);
    setRegionState(null);
  };

  return (
    <Fragment>
      {regionState ? (
        <Mask closeCarouselHandler={closeCarouselHandler} />
      ) : null}
      <header>
        <NavMain />
      </header>

      <main className="main">
        <h1 className="main-header">Empik lokalne promocje</h1>
        <Description />
        <Map onClick={onClickHandler} regionsList={regionsList} />

        {/* Render carousel only if the region was selected */}
        {regionState ? (
          <CarouselMain
            regionState={regionState}
            regionsList={regionsList}
            setRegionState={setRegionState}
            carouselIndexState={carouselIndexState}
            setCarouselIndexState={setCarouselIndexState}
            merchansideList={[...merchandiseState]}
            deselectLand={deselectLand}
            closeCarouselHandler={closeCarouselHandler}
          />
        ) : null}
      </main>
      <Footer regionsList={regionsList} />
    </Fragment>
  );
};

export default Container;
