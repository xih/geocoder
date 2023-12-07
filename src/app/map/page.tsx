"use client";

import React from "react";
import Map, {
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
// import Geolocate from "./Geolocate";

export default function MapComponent() {
  return (
    <Map
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
      mapStyle="https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    >
      {/* <Geolocate
          position="top-left"
          mapboxAccessToken={process.env.NEXT_PUBLIC_LOCAL_MAPBOX_TOKEN!}
        /> */}
      <GeolocateControl position="top-right" />
      <NavigationControl position="top-right" />
    </Map>
  );
}
