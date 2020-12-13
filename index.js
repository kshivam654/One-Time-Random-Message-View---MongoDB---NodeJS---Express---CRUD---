const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const MessageRoute = require("./routes/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/ping", (req, res) => {
    res.send("API IS LIVE");
});
app.use("/", MessageRoute);

mongoose
    .connect(process.env.SECRETE_KEY)
    .then((result) => {
        console.log("Connection Successful to Mongodb");
        app.listen(process.env.PORT || 3000);
    })
    .catch((error) => {
        console.error("Failed to connect to mongodb");
    });
