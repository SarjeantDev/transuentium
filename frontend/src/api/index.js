import axios from 'axios';

// url pointing to backend route
// const endpoint = "http://localhost:5000"
const endpoint = process.env.DB_LINK || "https://transuentium-heroku.herokuapp.com"

export const fetchAllGoStations = async (state) => {
    console.log("you've made it here", state)
    const { data, status } = await axios.get(`${endpoint}/gostations`)
    console.log(status, data.listOfStations)
    if (status === 200) {
        console.log("Frontend connected to db: data", data.listOfStations)
        state(data.listOfStations)
    } else {
        console.log("error")
    }
}

// patch is the axios function for updating 
// export const updateGoStationInfo = (id, updatedInfo) => axios.patch(`${endpoint}/gostations${id}`, updatedInfo);

// export const updateGoStationInfo = async (id, updatedInfo) => {
//     console.log("you've made it here", state)
//     const { data, status } = await axios.patch(`${endpoint}/gostations${id}`, updatedInfo)
//     console.log(status, data.listOfStations)
//     if (status === 200) {
//         console.log("Frontend connected to db: data", data.listOfStations)
//         state(data.listOfStations)
//     } else {
//         console.log("error")
//     }
// }



export const likePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

export const dislikePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

// export const updatePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

// export const updatePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

// export const updatePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

// export const updatePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${endpoint}/${id}`);

// export const likePost = (id) => axios.patch(`${endpoint}/${id}/likepost`)
// export const dislikePost = (id) => axios.patch(`${endpoint}/${id}/dislikepost`)


// patch is the axios function for updating 