const express = require('express');
const cors = require('cors');
const knex = require('../db/knex.js');
const dotenv = require('dotenv');

dotenv.config({
  path: './.env',
});

const app = express();

app.use(express.json());
app.use(cors());

// articles routes
app.post('/', (req, res) => {});

//test
app.get('/', (req, res) => {
  res.send('IM WORKING NOW :)');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running, ⚡️🏃');
});
