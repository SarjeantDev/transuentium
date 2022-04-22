import React, { useState, useEffect } from "react";
import { Popup } from "react-leaflet"
import '../App.css';
import Form from "../features/markerForm/MarkerForm"


const LoadPopups = ({ station }) => {
    return (
        <Popup minWidth={300}>
            <div className="title-container">
                <h2>{station.lineName}-{station.stationName}</h2>
            </div>
            <Form station={station} />
        </Popup>
    );
}

export default LoadPopups;