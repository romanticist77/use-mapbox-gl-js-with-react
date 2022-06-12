import React, { useRef } from 'react';
import useMapbox from './useMapbox.hook'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function App() {

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWNobWVkb3ciLCJhIjoiY2wzOGY4aDdqMDBodzNqcHIwZTF2Y3F3MyJ9.2Cspq7xwjY058eiwiJpdAg";

  const mapContainer = useRef()
  
  useMapbox(mapContainer, [], 0)

  const {handleChange} = useMapbox();

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
