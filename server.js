// requires
const { resolveSoa } = require("dns");
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const { ppid } = require("process");
const PORT = process.env.PORT || 3001;
const notes = require("./db/db.json");

function createNote() {
    // writes data
    fs.writeFileSync(

    );

    // save data
}

// HTML routes

// GET route
// app.get

// POST
// app.post


app.listen(PORT, () => {
    console.log(`Now listening to post ${PORT} `)
})

