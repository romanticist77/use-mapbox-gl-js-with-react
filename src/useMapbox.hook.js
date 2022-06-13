import {useLayoutEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
    "pk.eyJ1IjoiYWNobWVkb3ciLCJhIjoiY2wzOGY4aDdqMDBodzNqcHIwZTF2Y3F3MyJ9.2Cspq7xwjY058eiwiJpdAg";

export default function useMapbox (container, map, marker, center, zoom) {

    // const [marker, setMarker] = useState();

    // if (!container || "") {
    //     container = "map"
    // }
    if (!center || []) {
        center =[37.610641, 55.761994]
    }
    if (!zoom || 0) {
        zoom = 10
    }
    useLayoutEffect(() => {
        // console.log(map.current)
        // console.log(container.current)
        if (map) {
          map.current = new mapboxgl.Map({
          container: container.current,
          style: "mapbox://styles/mapbox/dark-v10",
          center: center,
          zoom: zoom
        });
          marker.current = new mapboxgl.Marker().setLngLat([37.610641, 55.761994]).addTo(map.current)
        }
      }, []);

    return {marker}
}

// setMarker(
    // new mapboxgl.Marker().setLngLat([37.610641, 55.761994]).addTo(map.current)
    // );}