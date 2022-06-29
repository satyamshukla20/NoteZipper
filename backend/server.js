const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");



const app = express();
dotenv.config();


app.get("/", (req, res) => {
    res.send("API is running");
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id1", (req, res) => {
    const note = notes.find((n) => n._id1 === req.params.id);
    res.send(note);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, 
    console.log(`server started on port ${PORT}`)
);