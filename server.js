import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const databaseName = 'tinder-db'
const connectionURL = `mongodb+srv://tinder-clone-admin:admin-tinder-clone@cluster0.k68qr.mongodb.net/?retryWrites=true&w=majority`

// Middlewares
app.use(express.json());
app.use(Cors());

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

// Push info to the database
app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body

    cards.create(dbCard, (err, data) => {
        if (err) {
            // in case of error, return error message - internal server error
            res.status(500).send(err)
        } else {
            // in case of success, return the card that was created
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            // in case of error, return error message - internal server error
            res.status(500).send(err)
        } else {
            // in case of success, retrieve every thing from the database
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => {
    console.log(`Server is listening on localhost: ${port}`);
})