import React, { useState, useEffect } from "react";
import { Popup } from "react-leaflet"
import { SanitarySlider, SafetySlider } from "./Slider";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import TextBox from "./Notes"
import '../App.css';
import IconLabelButtons from "./Button"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { updatePost } from "../api";
import { useDispatch } from 'react-redux';


const LoadPopups = ({ station }) => {
    // const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null)

    return (
        <Popup>
            <div className="title-container">
                <h2>{station.lineName}-{station.stationName}</h2>
            </div>
            <div className="like-dislike-container">
                <ThumbUpAltIcon fontSize="small" />
                <ThumbDownAltIcon fontSize="small" />
            </div>
            <IconLabelButtons />
            <h3 className="popup-sub-heading">Sanitary Level</h3>
            <SanitarySlider />
            <h3 className="popup-sub-heading">Safety Level</h3>
            <SafetySlider />
            <TextBox />
            <div className="submit-button-container">

                {/* <Button variant="contained" onClick={() => setPost(!post)} endIcon={<SendIcon />}> {post ? "Submitted" : "Submit"} </Button> */}
                <Button variant="contained" endIcon={<SendIcon />}>Submit</Button>
            </div>

        </Popup>


    );
}

export default LoadPopups;