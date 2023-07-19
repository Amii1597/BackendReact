const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));
require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));
const PORT = process.env.PORT;
app.get("/h", (req, res) => {
  res.json({ message: "All good" });
});

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});