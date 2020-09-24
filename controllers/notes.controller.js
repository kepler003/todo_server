
const notesModel = require('../models/notes.model');


// Create note
exports.createNote = (req, res) => {
  res.send('Create note: Not yet implemented');
}

// Get all notes
exports.getAllNotes = async (req, res) => {
  const notes = await notesModel.findAllNotes();
  
  res.send(notes);
}

// Update note
exports.updateNote = (req, res) => {
  res.send('Update note: Not yet implemented');
}

// Delete note
exports.deleteNote = (req, res) => {
  res.send('Delete note: Not yet implemented');
}
