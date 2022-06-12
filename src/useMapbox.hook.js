import {useLayoutEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oaXRpaWMiLCJhIjoiY2t2eGkyanJ3Y2c2azMwczdtOGppa3N5ZyJ9.G4VtowYp1GEpWxvh3nRFVQ';

export default function useMapbox (container, center, zoom) {

    const [marker, setMarker] = useState();

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
        if (container) {
            const map = new mapboxgl.Map({
                container: container.current,
                style: "mapbox://styles/mapbox/dark-v10",
                center: center,
                zoom: zoom
              });

            if (map) {
                setMarker(
                    new mapboxgl.Marker().setLngLat([37.610641, 55.761994]).addTo(map)
                    );
            }

            

            // console.log(map)
            console.log(marker)
        }
      }, []);

      const stores = {
        km20: [37.610641, 55.761994],
        belief: [37.601152, 55.733396],
        brandshop: [37.616812, 55.767839]
      };

      
      function handleChange(e) {
        console.log(marker)
        // console.log(marker.setLngLat(stores[e.target.value]))
        const value = e.target.value;
        if (marker) {
            value && marker.setLngLat(stores[value]);
        }
        
      }
      

    return {handleChange}
}