const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const notesController = require('../controllers/notes.controller');


router.post('/notes', notesController.createNote);

router.get('/notes', auth, notesController.getAllNotes);

router.put('/notes/:id', notesController.updateNote);

router.delete('/notes/:id', notesController.deleteNote);


module.exports = router;