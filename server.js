// requires
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const notes = require("./db/db.json");

// HTML routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

function createNote() {
    // writes data
    fs.writeFileSync(

    );

    // saves data
}


// GET route
// app.get

// POST
// app.post


app.listen(PORT, () => {
    console.log(`Now listening to post ${PORT} `)
})

