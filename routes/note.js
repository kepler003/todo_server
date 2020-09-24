const express = require('express');
const router = express.Router();
const db = require('../config/db.config');

router.post('/notes', (req, res) => {
  res.send('Note created');
});

router.get('/notes', (req, res) => {
  res.send('Notes downloaded');
});

router.put('/notes/:id', (req, res) => {
  res.send('Note updated');
});

router.delete('/notes/:id', (req, res) => {
  res.send('Note deleted');
});

module.exports = router;