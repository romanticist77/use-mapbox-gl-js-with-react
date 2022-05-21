import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

function App() {
  const [random, setRandom] = useState(Math.random());

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.61192, 55.76199],
      zoom: 10
    });
  }, []);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWNobWVkb3ciLCJhIjoiY2wzOGY4aDdqMDBodzNqcHIwZTF2Y3F3MyJ9.2Cspq7xwjY058eiwiJpdAg";

  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

export default App;
