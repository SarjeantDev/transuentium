import React, { useState, useEffect } from "react";
import '../../App.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { HTTP_STATUS } from "../../app/constants"

import { SanitarySlider, SafetySlider } from "../../components/Slider";
import IconLabelButtons from "../../components/Button"
import OutlinedCard from "../../components/NoteCard"
import { useDispatch, useSelector } from 'react-redux'
import { fetchGoStations, getAllGoStations, getAllGoStationsStatus, updateMarker, selectNotes } from "../markers/markersSlice"
import {
    updateNote,
    updateDislikeCount,
    updateLikeCount,
    updateSafetyRating,
    updateSanitaryRating,
    updateServices,
    updateWifiStrength,
    updateGoStationInfo,
    fetchSpecificGoStation,
    getSpecificGoStation,
    getSpecificGoStationStatus
} from "../markerForm/markerFormSlice"

const Form = ({ station }) => {
    const [noteText, setNoteText] = useState("")
    const [notes, setNotes] = useState([])
    const dispatch = useDispatch();
    // const specificGoStations = useSelector(getSpecificGoStation)

    const specificGoStations = useSelector(getSpecificGoStation)
    const specificGoStationsStatus = useSelector(getSpecificGoStationStatus)

    // run only when dispatch changes - dependency
    useEffect(() => {
        // if (specificGoStationsStatus !== HTTP_STATUS.FULFILLED) {
        dispatch(fetchSpecificGoStation({ id: station._id }))
        // }
    }, [dispatch])



    console.log(specificGoStations, specificGoStationsStatus)

    return (
        <>
            <Container className="like-dislike-container">
                <ThumbUpAltIcon fontSize="small" onClick={() => console.log("hello")} />
                <ThumbDownAltIcon fontSize="small" />
            </Container>

            <IconLabelButtons />

            <h3 className="popup-sub-heading">Sanitary Level</h3>
            <SanitarySlider />

            <h3 className="popup-sub-heading">Safety Level</h3>
            <SafetySlider />

            <TextField
                className="text-box-notes"
                label="Notes"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) => setNoteText(e.target.value)}
            />

            <div className="submit-button-container">
                <Button variant="contained"
                    onClick={(e) => {
                        if (noteText !== "") {
                            dispatch(updateGoStationInfo({ id: station._id, note: noteText }))
                            dispatch(fetchSpecificGoStation({ id: station._id }))
                            dispatch(updateNote({ note: station.notes }))
                        }
                        console.log("station.notes ", station.notes, notes)
                    }}
                    endIcon={<SendIcon />}
                >Submit</Button>
            </div>

            {
                specificGoStationsStatus !== HTTP_STATUS.FULFILLED ?
                    null :
                    specificGoStations.notes.map((note) => (
                        <OutlinedCard key={note.noteId} note={note} />
                    ))
            }

            {/* {
                specificGoStationsStatus !== HTTP_STATUS.FULFILLED ?
                    null :

                    station.notes.map((note) => (
                        <OutlinedCard key={note.noteId} note={note} />
                    ))

                specificGoStations.notes.map((note) => (
                    <OutlinedCard key={note.noteId} note={note} />
                ))
            } */}

            {/* {station.notes.length > 0 ? (
                <div className='goals'>
                    {station.notes.map((note) => (
                        <OutlinedCard key={note.noteId} note={note} />
                    ))}
                </div>
            ) : (
                null
            )} */}

        </>
    );
}

export default Form;