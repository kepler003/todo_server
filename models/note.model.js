
const queryDb = require('../middleware/queryDb');
const throwError = require('../middleware/throwError');


// Create new note
const createNote = async ({userId, body}) => {

  // Create
  const createQuery = 'INSERT INTO notes (user_id, body) VALUES (?, ?)';
  const createFields = [userId, body];
  const createData = await queryDb(createQuery, createFields);

  // Find & return note
  return (await findById(createData.insertId))[0];
}

// Find note by id
const findById = async (id) => {
  const query = 'SELECT * FROM notes WHERE id = ?';
  const fields = [id];
  return await queryDb(query, fields);
}

// Find note by id
const findNotesByUserId = async (id) => {
  const query = 'SELECT * FROM notes WHERE user_id = ?';
  const fields = [id];
  return await queryDb(query, fields);
}

// Update note
const updateNote = async ({id, body, userId}) => {

  // Find
  const note = (await findById(id))[0];

  
  // Check for note
  if(!note) throwError(400, "Notatka nie istnieje");

  // Check if note belongs to user
  if (note.user_id !== userId) throwError(401, "Notatka nie należy do użytkownika");
  

  // Update
  const query = 'UPDATE notes SET body = ? WHERE id = ?';
  const fields = [body, id];
  const updateData = await queryDb(query, fields);


  // Find
  return (await findById(id))[0];
}

// Update note
const deleteNote = async ({id, userId}) => {

  // Find
  const note = (await findById(id))[0];


  // Check for note
  if(!note) throwError(400, "Notatka nie istnieje");

  // Check if note belongs to user
  if (note.user_id !== userId) throwError(401, "Notatka nie należy do użytkownika");
  
  
  // Delete
  const query = 'DELETE FROM notes WHERE id = ?';
  const fields = [id];
  const updateData = await queryDb(query, fields);
}


module.exports = {
  createNote, findById, findNotesByUserId, updateNote, deleteNote
}