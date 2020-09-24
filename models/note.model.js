
const queryDb = require('../middleware/queryDb');


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


module.exports = {
  createNote, findById
}