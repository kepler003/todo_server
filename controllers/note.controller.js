
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
      userId: req.session.userId,
      body
    });

    
    // Send note data
    res.send(note);

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}

// Get all notes
exports.getUserNotes = async (req, res) => {
  
  try {
    
    // Find notes
    const notes = await noteModel.findNotesByUserId(req.session.userId);
    
    // Send notes data
    res.send(notes);

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}

// Update note
exports.updateNote = async (req, res) => {
  
  try {
    
    // Get note data
    const {body} = req.body;
    const {id} = req.params;

    // Check note data
    if (!body.length) throwError(400, 'Notatka nie może być pusta');
    
    
    // Update note
    const note = await noteModel.updateNote({id, body, userId: req.session.userId});

    
    // Send note data
    res.send(note);

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}

// Delete note
exports.deleteNote = async (req, res) => {
  
  try {
    
    // Get note id
    const {id} = req.params;
    console.log(id);


    // Delete note
    await noteModel.deleteNote({id, userId: req.session.userId});


    // Respond
    res.sendStatus(200);

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}
