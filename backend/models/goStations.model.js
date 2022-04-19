import mongoose from "mongoose";

const goStationsSchema = new mongoose.Schema({
    stationName: String,
    serviceType: String,
    lineName: String,
    services: [String],
    wifiStrength: {
        type: [Number],
        default: 0
    },
    safetyRating: {
        type: [Number],
        default: 0
    },
    sanitaryRating: {
        type: [Number],
        default: 0
    },
    notes: {
        noteId: String,
        creationDate: {
            type: Date,
            default: new Date()
        },
        likeCount: {
            type: Number,
            default: 0
        },
        dislikeCount: {
            type: Number,
            default: 0
        },

    },
    hoursOfOperation: String,
    type: String,
    coordinates: Array,
})

const goStationsModel = mongoose.model("go-station-points", goStationsSchema)

export { goStationsModel, } 