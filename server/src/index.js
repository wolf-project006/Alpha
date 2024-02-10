const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('../routes/user');

dotenv.config({
  path: './.env',
});

const app = express();

app.use(express.json());
app.use(cors());

// user routes
app.use('/api/user', userRoutes);

//test
app.get('/', (req, res) => {
  res.send('IM WORKING NOW :)');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running, ⚡️🏃');
});
