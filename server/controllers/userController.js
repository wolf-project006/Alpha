const { createUser, getUserByUsername } = require('../models/userModel');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

// login user
const loginUser = async (req, res) => {
  res.json({ mesg: 'login user' });
};

//signup user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const exist = await getUserByUsername(username);
    if (exist) {
      return res.status(409).json({ error: 'Username not available' });
    }
    //const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, email, hashedPassword);
    res.status(201).json({ msg: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { loginUser, signupUser };
