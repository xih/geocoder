"use client";

import React from "react";
import Map, { GeolocateControl, ScaleControl } from "react-map-gl";
import Geocoder from "./geocoder";
import { env } from "@/env.js";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Mapbox1() {
  return (
    <Map
      mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
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
      mapStyle="mapbox://styles/mapbox/light-v9"
      reuseMaps={true}
      attributionControl={false}
    >
      <GeolocateControl position="top-right" />
      <ScaleControl />
      <Geocoder />
    </Map>
  );
}
