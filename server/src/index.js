const express = require('express');
const cors = require('cors');
const knex = require('../db/knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({
  path: './.env',
});

const app = express();

app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET;

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json('Please provide username, email, and password');
  }

  try {
    const existingUser = await knex('user_table').where({ email }).first();
    if (existingUser) {
      return res.status(400).json('Email is already used');
    }
    const existingUsername = await knex('user_table')
      .where({ username })
      .first();
    if (existingUsername) {
      return res.status(400).json('Username is already in use');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await knex('user_table').insert({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json('User created successfully');
  } catch (error) {
    res.status(500).json('Error creating user');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await knex('user_table').where({ username }).first();
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json('Invalid credentials');
    }
  } catch (error) {
    res.status(500).json('Error during login');
  }
});
app.get('/protected', authenticateToken, (req, res) => {
  res.json('This is a protected route');
});

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json('Unauthorized');

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json('Forbidden');
    req.user = user;
    next();
  });
}
//test
app.get('/', (req, res) => {
  res.send('IM WORKING NOW :)');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running, ⚡️🏃');
});
