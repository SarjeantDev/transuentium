import mongoose from "mongoose";

// const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;
const DATABASE_URL = "travel-hub.on9jj.mongodb.net"
const DATABASE_USER = "travelhub"
const DATABASE_PASSWORD = "qwerty2022"
const DATABASE_NAME = "travel-hub"

// "mongodb+srv://travelhub:qwerty2022@travel-hub.on9jj.mongodb.net/travel-hub"

mongoose.connect(
    `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("db is now connected");
});