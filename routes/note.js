
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
const allowIfLoggedIn = require('../middleware/allowIfLoggedIn');


// Create note
router.post('/notes', allowIfLoggedIn, noteController.createNote);

// Get all user's notes
router.get('/notes', allowIfLoggedIn, noteController.getUserNotes);

// Update note
router.put('/notes/:id', allowIfLoggedIn, noteController.updateNote);

// Delete note
router.delete('/notes/:id', allowIfLoggedIn, noteController.deleteNote);


module.exports = router;