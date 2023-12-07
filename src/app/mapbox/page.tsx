"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import Map, {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
  Source,
  useControl,
} from "react-map-gl";
import type { FillLayer } from "react-map-gl";
// import Geolocate from "../map/Geolocate";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

import type { CircleLayer } from "react-map-gl";
import type { FeatureCollection } from "geojson";

const parkLayer: FillLayer = {
  id: "landuse_park",
  type: "fill",
  source: "mapbox",
  "source-layer": "landuse",
  filter: ["==", "class", "park"],
  paint: {
    "fill-color": "#4E3FC8",
  },
};

// const geojson: FeatureCollection = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-122.4, 37.8],
//       },
//     },
//   ],
// };

const layerStyle: CircleLayer = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

// function DrawControl(props: DrawControlProps) {
//   useControl(() => new MapboxDraw(props), {
//     position: props.position,
//   });

//   return null;
// }

export default function Mapbox() {
  // const markerRef = useRef<mapboxgl.Marker>();
  const markerRef = useRef<mapboxgl.Marker>(null); // Initialize with null
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const mapRef = useRef(null);

  const popup = useMemo(() => {
    return new mapboxgl.Popup().setText("Hello world!");
  }, []);

  const togglePopup = useCallback(() => {
    markerRef.current?.togglePopup();
  }, []);

  // useEffect(() => {
  //   if ()
  // })

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_LOCAL_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        overflow: "hidden",
      }}
      ref={mapRef}
      mapStyle="mapbox://styles/mapbox/light-v9"
      reuseMaps={true}
      attributionControl={false}
    >
      {/* <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source> */}
      {/* <DrawControl
        position="top-left"
        displayControlsDefault={true}
        // controls={{
        //   polygon: true,
        //   trash: true,
        // }}
      /> */}

      <Marker
        longitude={-122.4}
        latitude={37.8}
        color="red"
        popup={popup}
        ref={markerRef}
      />
      {/* <Marker longitude={-100} latitude={40} anchor="bottom" draggable={true}> */}
      {/* <img src="./pin.png" /> */}
      {/* </Marker> */}
      {/* <Layer {...parkLayer} /> */}
      {/* <Geolocate
        position="top-left"
        mapboxAccessToken={process.env.NEXT_PUBLIC_LOCAL_MAPBOX_TOKEN!}
      /> */}
      {showPopup && (
        <Popup
          longitude={-122.4}
          latitude={38}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
      <GeolocateControl position="top-right" />
      <ScaleControl />
      <NavigationControl
        position="top-right"
        showCompass
        showZoom
        visualizePitch
      />
      <AttributionControl customAttribution="Map design by me" />
      <FullscreenControl />
    </Map>
  );
}
