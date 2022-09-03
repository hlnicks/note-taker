// requires
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Now listening to post ${PORT} `)
})

