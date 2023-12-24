import React, { useState } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import type { GeocoderOptions } from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default function Geocoder() {
  const [marker, setMarker] = useState(null);

  const ctrl = new MapboxGeocoder({
    accessToken: process.env.NEXT_PUBLIC_LOCAL_MAPBOX_TOKEN!,
    marker: true,
    collapsed: false,
  });

  useControl(() => ctrl);

  ctrl.on("result", (evt) => {
    console.log(evt);
  });

  return null;
}
