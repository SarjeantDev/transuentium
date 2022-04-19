import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import LoadMarkers from "./components/Markers"
import './App.css';

function App() {
  return (
    <MapContainer center={[43.71, -79.42]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LoadMarkers />
    </MapContainer>

  );
}

export default App;