
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
    const notes = await noteModel.findNotesByUserId(/*req.session.userId*/ 1);
    
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
    const {id, body} = req.body;

    // Check note data
    if (!body.length) throwError(400, 'Notatka nie może być pusta');
    
    
    // Update note
    const note = await noteModel.updateNote({id, body, userId: /*req.session.userId*/ 1});

    
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
    const {id} = req.body;


    // Delete note
    await noteModel.deleteNote({id, userId: /*req.session.userId*/ 1});


    // Respond
    res.sendStatus(200);

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}
