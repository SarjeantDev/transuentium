import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Marker, TileLayer } from "react-leaflet"
import { fetchAllGoStations } from "../api"
import LoadPopups from "./Popups";
import CircularProgress from '@mui/material/CircularProgress';

const LoadMarkers = () => {
    const [markers, setMarkers] = useState([]);
    const [loading, isLoading] = useState(null)

    // const endpoint = process.env.DB_LINK || "https://transuentium.herokuapp.com"

    // const fetchPost = async () => {
    //     const { data, status } = await axios.get(`${endpoint}/gostations`)
    //     console.log(status, data.listOfStations)
    //     if (status === 200) {
    //         setMarkers(data.listOfStations)
    //     }
    // }

    useEffect(() => {
        fetchAllGoStations(setMarkers);
    }, []);

    return (
        <>
            {
                markers.map((station, i) =>
                    <Marker
                        key={station._id}
                        position={[
                            station.coordinates[1],
                            station.coordinates[0]
                        ]}
                    >
                        <LoadPopups station={station} />
                    </Marker>
                )
            }

        </>

    );
}

export default LoadMarkers;