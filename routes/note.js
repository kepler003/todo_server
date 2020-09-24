
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const noteController = require('../controllers/note.controller');


router.post('/notes', noteController.createNote);

router.get('/notes', noteController.getAllNotes);

router.put('/notes/:id', noteController.updateNote);

router.delete('/notes/:id', noteController.deleteNote);


module.exports = router;