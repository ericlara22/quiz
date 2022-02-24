const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);

//ROUTES

const questionEditor = require("./Routes/questionEditor");

app.use("/qedit", questionEditor);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(process.env.DB_CONNECTION),
  () => console.log("Connected to the DB");
