
import express from "express"
import { getGoStations, updateGoStationInfo, getSpecificGoStation } from "../controllers/goStation.controller.js"

const goStationsRouter = express.Router();

goStationsRouter.get("/", getGoStations);
goStationsRouter.get("/:id", getSpecificGoStation);
goStationsRouter.put('/:id', updateGoStationInfo)
// goStationsRouter.patch('/:id/notes/likePost', likePost)
// goStationsRouter.patch('/:id/notes/dislikePost', dislikePost)

export { goStationsRouter, }