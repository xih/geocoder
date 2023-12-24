import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapController } from "@maptiler/geocoding-control/types";

export default function MapEx() {
  const mapContainer = useRef(null);
  const map = useRef<maplibregl.Map>(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState("IVoxWRzAdtwB950ythXA");
  // @ts-ignore
  const [mapController, setMapController] = useState<MapController>();

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    // @ts-ignore
    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    if (map.current) {
      map.current.addControl(new maplibregl.NavigationControl(), "top-right");
      setMapController(createMapLibreGlMapController(map.current, maplibregl));
    }
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div className="ml-4 mt-4">
        {/* @ts-ignore */}
        <GeocodingControl apiKey={API_KEY} mapController={mapController} />
      </div>
      <div ref={mapContainer} className="h-screen w-screen overflow-hidden " />
    </div>
  );
}
