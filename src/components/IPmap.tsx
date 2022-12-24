import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import L from "leaflet";

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
  const [center, setCenter] = useState({});
  const [height, setHeight] = useState("500px");
  const position = [];
  const [lat, setLat] = useState(41.716667);
  const [long, setLong] = useState(44.783333);

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
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vw;
`;
