import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { endpoint, HTTP_STATUS } from "../../app/constants"

export const fetchSpecificGoStation = createAsyncThunk(
    'markerForm/fetchSpecificGoStation',
    async (updatedInfo) => {
        const { id } = updatedInfo;
        const { data, status } = await axios.get(`${endpoint}/gostations/${id}`)
        if (status === 200) return data;
        console.log("error")
    }
)

export const updateGoStationInfo = createAsyncThunk(
    'markerForm/updateGoStationInfo',
    async (updatedInfo) => {
        const { id } = updatedInfo;
        const { response, status } = await axios.put(`${endpoint}/gostations/${id}`, updatedInfo)
        console.log("updateGoStationInfo", updatedInfo, response, status, endpoint)
        if (status === 200) return response.data
        console.log("error")
    }
)

const markerFormSlice = createSlice({
    name: "markerForm",
    initialState: {
        markerData: [],
        status: null,
        id: null,
        dislikeCount: null,
        likeCount: null,
        safetyRating: null,
        sanitaryRating: null,
        services: null,
        wifiStrength: null,
        noteId: null,
        note: null,
        creationDate: null,
        likeCount: null,
        dislikeCount: null,
    },
    reducers: {
        updateNote(state, action) {
            state.note = action.payload
            console.log("The note has been updated", state.note)
        },
        updateDislikeCount(state, action) {
            state.dislikeCount = action.payload
            console.log("The dislikeCount has been updated", state.dislikeCount)
        },
        updateLikeCount(state, action) {
            state.likeCount = action.payload
            console.log("The likeCount has been updated", state.likeCount)
        },
        updateSafetyRating(state, action) {
            state.safetyRating = action.payload
            console.log("The safetyRating has been updated", state.safetyRating)
        },
        updateSanitaryRating(state, action) {
            state.sanitaryRating = action.payload
            console.log("The sanitaryRating has been updated", state.sanitaryRating)
        },
        updateServices(state, action) {
            state.services = action.payload
            console.log("The services has been updated", state.services)
        },
        updateWifiStrength(state, action) {
            state.wifiStrength = action.payload
            console.log("The wifiStrength has been updated", state.wifiStrength)
        },
    },
    extraReducers: {
        [fetchSpecificGoStation.pending]: (state, action) => {
            state.status = HTTP_STATUS.PENDING
        },
        [fetchSpecificGoStation.fulfilled]: (state, { payload }) => {
            state.markerData = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [fetchSpecificGoStation.rejected]: (state, action) => {
            state.status = HTTP_STATUS.REJECTED
        },
    }
})

export const getSpecificGoStation = (state) => state.markerForm.markerData
export const getSpecificGoStationStatus = (state) => state.markerForm.status

export const { updateNote, updateDislikeCount, updateLikeCount, updateSafetyRating, updateSanitaryRating, updateServices, updateWifiStrength } = markerFormSlice.actions

export default markerFormSlice.reducer