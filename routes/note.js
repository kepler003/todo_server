const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes.controller');


router.post('/notes', notesController.createNote);

router.get('/notes', notesController.getAllNotes);

router.put('/notes/:id', notesController.updateNote);

router.delete('/notes/:id', notesController.deleteNote);


module.exports = router;