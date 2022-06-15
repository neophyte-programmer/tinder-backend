import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const databaseName = 'tinder-db'
const connectionURL = `mongodb+srv://tinder-clone-admin:admin-tinder-clone@cluster0.k68qr.mongodb.net/?retryWrites=true&w=majority`

// Middlewares

// Database Config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})

app.post("/tinder/cards", (req, res) => {})

// Listener
app.listen(port, () => {
    console.log(`Server is listening on localhost: ${port}`);
})