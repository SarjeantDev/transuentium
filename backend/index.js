import express from "express";
import cors from "cors";
import { goStationsRouter } from "./router/index.js";

import "dotenv";
import "mongoose";
import "./db/index.js";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use("/gostations", goStationsRouter);

app.listen(port, () => {
    console.log(`Backend running on port http://localhost:${port}`)
})



