import axios from 'axios';

// url pointing to backend route
const endpoint = process.env.DB_LINK || "http://localhost:5000"
// const endpoint = process.env.DB_LINK || "https://transuentium.herokuapp.com"

export const fetchAllGoStations = async (state) => {
    const { data, status } = await axios.get(`${endpoint}/gostations`)
    console.log(status, data.listOfStations)
    if (status === 200) {
        console.log("Frontend connected to db: data", data.listOfStations)
        state(data.listOfStations)
    }
}

// patch is the axios function for updating 
export const updatePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);

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