// // getting access to our model
import mongoose from 'mongoose';
import { goStationsModel } from "../models/goStations.model.js"

// export const getGoStations = (req, res) => {
//     goStationsModel.find({}, (err, stations) => {
//         console.log(stations)
//         // if (err) {
//         //     return console.error("This is an error");
//         // }
//         // res.json({
//         //     listOfStations: stations
//         // });
//     });
// }
export const getGoStations = async (req, res) => {
    try {
        const goStations = await goStationsModel.find();

        console.log(goStations);

        // status 200 means everythings okay
        res.status(200).json({
            listOfStations: goStations
        });
    } catch (error) {
        console.error("Error in the getGoStations controller: ", error.message);
        res.status(404).json({ message: error.message })
    }
};

// update post controller
export const updateGoStationInfo = async (req, res) => {
    // extracting id from req.params
    const { _id: id } = req.params;
    const post = req.body;

    // checking if the id is valid in the mongoose db, if it's not valid just return a status saying nothings returned
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    // first param is the id, the second is the new idea, and we need to set the third to true
    const updatedGoStationInfo = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedGoStationInfo)
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await goStationsModel.findById(id);
    const updatedPost = await goStationsModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.json(updatedPost)
}


// export const dislikePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

//     const post = await PostMessage.findById(id);
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, { dislikeCount: post.dislikeCount + 1 }, { new: true })
//     res.json(updatedPost)
// }

// // create post controller
// export const createPost = async (req, res) => {
//     // with post requests you have access to a request.body
//     const post = req.body;

//     const newPost = new PostMessage(post)

//     try {
//         await newPost.save();

//         // 201 = succesful creation
//         res.status(201).json(newPost);
//     } catch (error) {
//         // 409
//         res.status(409).json({ message: error.message })
//     }
// }


// export const deletePost = async (req, res) => {
//     const { id } = req.params;

//     // checking if the id is valid in the mongoose db
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

//     await PostMessage.findByIdAndRemove(id)

//     res.json({ message: 'Post deleted.' })
// }
