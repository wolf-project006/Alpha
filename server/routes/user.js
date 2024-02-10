const express = require('express');
const router = express.Router();

// import controller functions
const { loginUser, signupUser } = require('../controllers/userController');

// login route
router.post('/login', loginUser);

// signin route
router.post('/signup', signupUser);

module.exports = router;
