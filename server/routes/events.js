const express = require("express");
const router = express.Router();
const cors = require("cors");
const { v4: uuid} = require("uuid");
const fs = require("fs");

const dataLocation  = "./data/events.json";

router.route("/")
.get((req, res) => {

    fs.readFile(dataLocation, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading from file: ", err);
            return res.status(500).send("Error reading from file");
        }

        // creating this var is not necess, but adding in case do processing before sending back later
        let events = JSON.parse(data);

        return res.json(events);
    })
})

module.exports = router;