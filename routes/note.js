
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');


// Create note
router.post('/notes', noteController.createNote);

// Get all user's notes
router.get('/notes', noteController.getUserNotes);

// Update note
router.put('/notes/:id', noteController.updateNote);

// Delete note
router.delete('/notes/:id', noteController.deleteNote);


module.exports = router;