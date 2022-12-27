import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
type Props = {
  height?: number | undefined;
  center?: any;
};

const svgIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg" 
  width="46" 
  height="56">
  <path fill-rule="evenodd" 
  d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/>
  </svg>`,
  className: "svg-icon",
  iconSize: [40, 40],
});
L.Marker.prototype.options.icon = svgIcon;

export const IPmap = () => {
  const [lat, setLat] = useState(41.716667);
  const [long, setLong] = useState(44.783333);

  const mapRef = useRef();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);
  return (
    <Container>
      <MapContainer
        style={{
          width: "100vw",
          height: "70vh",
          position: "absolute",
          zIndex: "1",
          bottom: -100,
        }}
        className="markercluster-map"
        center={[51.0, 19.0]}
        zoom={5}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MapContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vw;
`;

//   return (
//     <MapContainer
//       className="markercluster-map"
//       center={[51.0, 19.0]}
//       zoom={4}
//       maxZoom={18}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />

//       <Marker position={[49.8397, 24.0297]} />
//       <Marker position={[52.2297, 21.0122]} />
//       <Marker position={[51.5074, -0.0901]} />
//     </MapContainer>
//
