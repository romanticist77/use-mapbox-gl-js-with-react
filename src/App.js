import React, { useState, useRef } from 'react';
import useMapbox from './useMapbox.hook'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function App() {


  const mapContainer = useRef()
  const map = useRef()
  const marker = useRef()
  useMapbox(mapContainer, map, marker, [], 0)

  // const {marker} = useMapbox();


  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };
  function handleChange(e) {
    const value = e.target.value;
    console.log(marker)
    value && marker.current.setLngLat(stores[value]);
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleChange}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div ref={mapContainer} id="map"></div>
    </>
  );
}

export default App;
