const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const { v4: uuid} = require("uuid");

const fs = require("fs");
const eventsRoute = require('./routes/events');

const dataLocation  = "./data/events.json";

app.use("/events", eventsRoute);

app.get("/", (req, res) => {
    res.send("You hit / on server, but there's nothing here, friend")
});

app.listen(port, () => {
    console.log("Server is now listening on port 8080, friends");
})