// //  where is this code copy pasted from?

import React from "react";

export default function page() {
  return <div>page</div>;
}

// import React, { useState } from "react";
// import ReactMapGL, {
//   GeolocateControl,
//   Marker,
//   Popup,
//   NavigationControl,
// } from "react-map-gl";
// import mapboxgl from "mapbox-gl"; // Required for MapLibre

// // Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your Mapbox access token
// mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

// export default function Test1() {
//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: "100%",
//     latitude: 0,
//     longitude: 0,
//     zoom: 2,
//   });

//   const [searchText, setSearchText] = useState<string>("");
//   const [searchResult, setSearchResult] =
//     useState<mapboxgl.MapboxGeoJSONFeature | null>(null);

//   // Define a TypeScript interface for the expected structure of the response data
//   interface GeoCodeResponse {
//     features: {
//       center: [number, number];
//       place_name: string;
//     }[];
//   }

//   const handleGeocode = async () => {
//     try {
//       const response = await fetch(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${mapboxgl.accessToken}`,
//       );

//       const data: GeoCodeResponse = await response.json();

//       if (data.features && data.features.length > 0) {
//         setSearchResult(data.features[0]);
//         setViewport({
//           ...viewport,
//           latitude: data.features[0].center[1],
//           longitude: data.features[0].center[0],
//           zoom: 12,
//         });
//       } else {
//         setSearchResult(null);
//         console.error("No results found");
//       }
//     } catch (error) {
//       console.error("Error geocoding:", error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           placeholder="Enter location"
//         />
//         <button onClick={handleGeocode}>Geocode</button>
//       </div>
//       <ReactMapGL
//         {...viewport}
//         onViewportChange={(newViewport) => setViewport(newViewport)}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//       >
//         <GeolocateControl
//           positionOptions={{ enableHighAccuracy: true }}
//           trackUserLocation={true}
//         />
//         <NavigationControl showCompass={false} />

//         {searchResult && (
//           <Marker
//             latitude={searchResult.center[1]}
//             longitude={searchResult.center[0]}
//           >
//             <div>Marker here</div>
//           </Marker>
//         )}

//         {searchResult && (
//           <Popup
//             latitude={searchResult.center[1]}
//             longitude={searchResult.center[0]}
//             closeButton={true}
//             onClose={() => setSearchResult(null)}
//           >
//             <div>{searchResult.place_name}</div>
//           </Popup>
//         )}
//       </ReactMapGL>
//     </div>
//   );
// }
