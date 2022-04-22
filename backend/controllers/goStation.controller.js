// // getting access to our model
import mongoose from 'mongoose';
import { goStationsModel } from "../models/goStations.model.js"

export const getGoStations = async (req, res) => {
    try {
        const goStations = await goStationsModel.find();
        // status 200 means everythings okay
        res.status(200).json(goStations);
    } catch (error) {
        console.error("Error in the getGoStations controller: ", error.message);
        res.status(404).json({ message: error.message })
    }
};

export const getSpecificGoStation = async (req, res) => {
    try {
        const { id } = req.params;
        const goStationNotes = await goStationsModel.findById(id);
        res.status(200).json(goStationNotes);
    } catch (error) {
        console.error("Error in the getSpecificGoStation controller: ", error.message);
        res.status(404).json({ message: error.message })
    }
}

// update post controller
export const updateGoStationInfo = async (req, res) => {
    // extracting id from req.params
    const { id } = req.params;
    const noteMessage = req.body;
    // console.log("updateGoStationInfo params, body, status", req.params, req.body, "\n\n\n", noteMessage)

    // checking if the id is valid in the mongoose db, if it's not valid just return a status saying nothings returned
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    goStationsModel.findById(id, function (err, goStation) {
        if (goStation.length === 0) return res.json();
        const currentNotes = goStation.notes;
        // console.log(currentNotes)

        const NewNote = {
            noteId: goStation.notes.length,
            note: noteMessage.note,
        };

        // console.log("These are the current notes", currentNotes)
        goStation.notes.push(NewNote);
        goStation.save(function (err) {
            if (err) {
                console.log("there was an err", err)
            }
            return res.json();
        })
        // console.log("Current gostation:", goStation)
    });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await goStationsModel.findById(id);
    const updatedPost = await goStationsModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.json(updatedPost)
}