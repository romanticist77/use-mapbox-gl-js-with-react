import {useLayoutEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function useMapbox (container, center, zoom, setMarker) {
    if (!container || "") {
        container = "map"
    }
    if (!center || []) {
        center =[37.610641, 55.761994]
    }
    if (!zoom || 0) {
        zoom = 10
    }
    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
          container: container,
          style: "mapbox://styles/mapbox/dark-v10",
          center: center,
          zoom: zoom
        });
        setMarker(
        new mapboxgl.Marker().setLngLat([37.610641, 55.761994]).addTo(map)
         );
      }, []);
}