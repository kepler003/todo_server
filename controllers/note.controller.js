
const throwError = require('../middleware/throwError');
const handleError = require('../middleware/handleError');
const noteModel = require('../models/note.model');


// Create note
exports.createNote = async (req, res) => {
  
  try {
    
    // Get note data
    const {body} = req.body;

    // Check note data
    if (!body.length) throwError(400, 'Notatka jest pusta');
    
    

    // Create note
    const note = await noteModel.createNote({
      userId: /*req.session.userId*/ 1,
      body
    });

    
    // Send note data
    res.send({
      id   : note.id,
      body : note.body
    });

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}

// Get all notes
exports.getAllNotes = async (req, res) => {
  const notes = await noteModel.findAllNotes();
  
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
