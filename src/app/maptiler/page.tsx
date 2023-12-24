"use client";

import MapLibreGL from "maplibre-gl";
import React, { useEffect, useRef, useState } from "react";
import Map from "react-map-gl/maplibre";
// import type { MapController } from "@maptiler/geocoding-control/types";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import MapEx from "./map";

// goal: create a maplibre map and add geocoding from mapTILER onto here:
// also add in weathertiling
// also play with adding new shadcn components

export default function MapTiler() {
  // const mapContainerRef = useRef(null);

  // const [mapController, setMapController] = useState<MapController>();

  // useEffect(() => {
  //   if (!mapContainerRef.current) {
  //     return;
  //   }

  //   const map = mapContainerRef.current.getMap();

  //   const geocodingControl = createMapLibreGlMapController();
  //   map.addControl(geocodingControl);

  //   // console.log(createMapLibreGlMapController, "createMapLibreGlMapController");

  //   // setMapController(createMapLibreGlMapController(map, maplibregl));
  // }, []);

  return (
    <MapEx />
    // <Map
    //   ref={mapContainerRef}
    //   initialViewState={{
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom: 12,
    //   }}
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     position: "fixed",
    //     overflow: "hidden",
    //   }}
    //   // mapStyle="https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    //   // mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=IVoxWRzAdtwB950ythXA"
    //   mapStyle="https://api.maptiler.com/maps/dataviz-dark/style.json?key=IVoxWRzAdtwB950ythXA"
    // >
    //   <GeocodingControl
    //     apiKey={"IVoxWRzAdtwB950ythXA"}
    //     mapController={mapController}
    //   />
    // </Map>
  );
}
