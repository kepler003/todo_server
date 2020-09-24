const express = require('express');
const router = express.Router();
const noteRouter = require('./note');
const userRouter = require('./user');


router.use(noteRouter);
router.use(userRouter);


module.exports = router;