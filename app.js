const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello, this is first API")
})


const port = process.env.PORT || 8800;

app.listen(port, (req, res) => {
  console.log("Server Connected!")
})