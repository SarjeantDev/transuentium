
import express from "express"
import { getGoStations, updateGoStationInfo } from "../controllers/goStation.controller.js"

const goStationsRouter = express.Router();

goStationsRouter.get("/", getGoStations);
goStationsRouter.patch('/:id', updateGoStationInfo)
// goStationsRouter.patch('/:id/notes/likePost', likePost)
// goStationsRouter.patch('/:id/notes/dislikePost', dislikePost)

export { goStationsRouter, }

// import express from 'express';

// // importing posts
// import { getPosts, createPost, updatePost, deletePost, likePost, dislikePost } from '../controllers/posts.js';

// // adding the routes
// // callback function that exes when someone visits localhost:5000/posts --> it's posts because of the prefix we set up in the server/index.js
// // localhost: 5000 / posts -- tested and is connected
// // having the controllers and routes separate makes this code look a lot cleaner
// router.get('/', getPosts);
// router.post('/', createPost);


// // delete router
// router.delete('/:id', deletePost)


// export default router;