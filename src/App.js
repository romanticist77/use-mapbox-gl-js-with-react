import React, {useLayoutEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function App() {

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWNobWVkb3ciLCJhIjoiY2wzOGY4aDdqMDBodzNqcHIwZTF2Y3F3MyJ9.2Cspq7xwjY058eiwiJpdAg";

  const [marker, setMarker] = useState();
  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });
    setMarker(
      new mapboxgl.Marker().setLngLat([37.610641, 55.761994]).addTo(map)
    );
  }, []);

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };
  function handleChange(e) {
    const value = e.target.value;
    value && marker.setLngLat(stores[value]);
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
      <div id="map"></div>
    </>
  );
}

export default App;
