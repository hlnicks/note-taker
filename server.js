// requires
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const notes = require("./db/db.json");

// create note function
function createNote(body, notesArray) {
    const note = body;
    // saves data
    notesArray.push(note);

    // creates data
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        // converts to JSON
        JSON.stringify(notesArray)
    );
    return note;
};

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET route
app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// POST
app.post("/api/notes", (req, res) => {
    // sets ID
    req.body.id = notes.length.toString();

    // adds note to json file
    const note = createNote(req.body, notes);
    res.json(req.body);
});

// Future project: DELETE

// HTML routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.listen(PORT, () => {
    console.log(`Now listening to port ${PORT} `)
});