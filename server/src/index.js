const express = require("express");
const cors = require("cors");
const knex = require("../db/knex.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//timestamp
const timeStamp = new Date().toISOString();

//get all users
app.get("/user_table", async (req, res) => {
  try {
    const allUser = await knex("user_table").select("*");
    res.status(200).send(allUser);
  } catch (err) {
    console.log(err.message);
  }
});

//get single user
app.get("/user_table/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await knex("user_table")
      .where("id", "=", id)
      .select("*");

    res.status(200).send(singleUser);
  } catch (err) {
    console.error(err.message);
  }
});

//get all post
app.get("/post_table", async (req, res) => {
  try {
    const allPost = await knex("post_table").select("*");
    res.status(200).send(allPost);
  } catch (err) {
    console.log(err.message);
  }
});

//get single post
app.get("/post_table/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singlePost = await knex("post_table")
      .where("id", "=", id)
      .select("*");

    res.status(200).send(singlePost);
  } catch (err) {
    console.error(err.message);
  }
});

//add new user
app.post("/user_table", async (req, res) => {
  try {
    const { first_name, last_name, username, email, password, bio, image } =
      req.body;

    const newUser = await knex("user_table")
      .insert({
        first_name,
        last_name,
        username,
        email,
        password,
        bio,
        image,
      })
      .returning("*");

    res.status(200).send(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

//add new post

app.post("/post_table", async (req, res) => {
  try {
    const { slug, title, description, body, createdAt, updateAt, userId } =
      req.body;

    const addPost = await knex("post_table")
      .insert({
        slug,
        title,
        description,
        body,
        createdAt: timeStamp,
        updateAt: timeStamp,
        userId,
      })
      .select("*");

    res.status(200).send(addPost);
  } catch (err) {
    console.error(err.message);
  }
});

//deleting user
app.delete("/user_table/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await knex("user_table").where("id", "=", id).del();

    res.status(200).send("User has been deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// deleting post
app.delete("/post_table/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await knex("post_table").where("id", "=", id).del();

    res.status(200).send("Post has been deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// user patch request
app.patch("/user_table/:id", async (req, res) => {
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

    await knex("user_table").where("id", "=", id).update(updatedUser);

    res.status(200).send(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error updating user");
  }
});

//post patch request
app.patch("/post_table/:id", async (req, res) => {
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
    await knex("post_table").where("id", "=", id).update(updatedPost);

    res.status(200).send(updatedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error updating user");
  }
});

//test
app.get("/", (req, res) => {
  res.send("IM NOT WORKING BROOOOOOOOOO!!!:(((");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running, ⚡️🏃");
});
