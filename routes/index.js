const express = require('express');
const router = express.Router();
const noteRouter = require('./note');

router.use(noteRouter);

module.exports = router;