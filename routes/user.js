
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


// Sign up
router.post('/user', userController.signUp);

// Log in
router.post('/user/login', userController.logIn);

// Log out
router.post('/user/logout', userController.logOut);


module.exports = router;