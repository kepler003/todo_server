
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const allowIfLoggedOut = require('../middleware/allowIfLoggedOut');


// Sign up
router.post('/user', allowIfLoggedOut, userController.signUp);

// Log in
router.post('/user/login', userController.logIn);

// Log out
router.post('/user/logout', userController.logOut);


module.exports = router;