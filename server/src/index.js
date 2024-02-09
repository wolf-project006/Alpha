const express = require("express");
const cors = require("cors");
const knex = require("../db/knex.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// todos routes
app.post("/", (req, res) => {});

//test
app.get("/", (req, res) => {
  res.send("IM NOT WORKING BROOOOOOOOOO!!!:(((");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running, ⚡️🏃");
});
