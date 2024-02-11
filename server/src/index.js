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
    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '3d' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json('Error creating user');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await knex('user_table').where({ username }).first();
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '3d' });
      res.status(200).json({ token });
    } else {
      res.status(401).json('Invalid credentials');
    }
  } catch (error) {
    res.status(500).json('Error during login');
  }
});
app.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const userData = await knex('user_table').where({ id: userId }).first();

    if (userData) {
      res.json(userData);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Error fetching dashboard data' });
  }
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

//timestamp
const timeStamp = new Date().toISOString();

//get all users
app.get('/user_table', async (req, res) => {
  try {
    const allUser = await knex('user_table').select('*');
    res.status(200).send(allUser);
  } catch (err) {
    console.log(err.message);
  }
});

//get single user
app.get('/user_table/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await knex('user_table')
      .where('id', '=', id)
      .select('*');

    res.status(200).send(singleUser);
  } catch (err) {
    console.error(err.message);
  }
});

//get all post
app.get('/post_table', async (req, res) => {
  try {
    const allPost = await knex('post_table').select('*');
    res.status(200).send(allPost);
  } catch (err) {
    console.log(err.message);
  }
});

//get single post
app.get('/post_table/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const singlePost = await knex('post_table')
      .where('id', '=', id)
      .select('*');

    res.status(200).send(singlePost);
  } catch (err) {
    console.error(err.message);
  }
});

//add new user
app.post('/user_table', async (req, res) => {
  try {
    const { first_name, last_name, username, email, password, bio, image } =
      req.body;

    const newUser = await knex('user_table')
      .insert({
        first_name,
        last_name,
        username,
        email,
        password,
        bio,
        image,
      })
      .returning('*');

    res.status(200).send(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

//add new post

app.post('/post_table', async (req, res) => {
  try {
    const { slug, title, description, body, createdAt, updateAt, userId } =
      req.body;

    const addPost = await knex('post_table')
      .insert({
        slug,
        title,
        description,
        body,
        createdAt: timeStamp,
        updateAt: timeStamp,
        userId,
      })
      .select('*');

    res.status(200).send(addPost);
  } catch (err) {
    console.error(err.message);
  }
});

//deleting user
app.delete('/user_table/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await knex('user_table').where('id', '=', id).del();

    res.status(200).send('User has been deleted');
  } catch (err) {
    console.error(err.message);
  }
});

// deleting post
app.delete('/post_table/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await knex('post_table').where('id', '=', id).del();

    res.status(200).send('Post has been deleted');
  } catch (err) {
    console.error(err.message);
  }
});

// user patch request
app.patch('/user_table/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, username, email, password, bio, image } =
      req.body;

    const updatedUser = {};
    if (first_name) updatedUser.first_name = first_name;
    if (last_name) updatedUser.last_name = last_name;
    if (username) updatedUser.username = username;
    if (email) updatedUser.email = email;
    if (password) updatedUser.password = password;
    if (bio) updatedUser.bio = bio;
    if (image) updatedUser.image = image;

    await knex('user_table').where('id', '=', id).update(updatedUser);

    res.status(200).send(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error updating user');
  }
});

//post patch request
app.patch('/post_table/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { slug, title, description, body } = req.body;

    // Build an object containing the fields to update
    const updatedPost = { updateAt: timeStamp };
    if (slug) updatedPost.slug = slug;
    if (title) updatedPost.title = title;
    if (description) updatedPost.description = description;
    if (body) updatedPost.body = body;

    // Update the user in the database
    await knex('post_table').where('id', '=', id).update(updatedPost);

    res.status(200).send(updatedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error updating user');
  }
});

// articles routes
app.post('/', (req, res) => {});

//test
app.get('/', (req, res) => {
  res.send('IM WORKING NOW :)');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running, ⚡️🏃');
});
