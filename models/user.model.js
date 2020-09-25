
const queryDb = require('../middleware/queryDb');
const throwError = require('../middleware/throwError');


// Add new user
const addUser = async ({username, password}) => {

  // Create
  const query = 'INSERT INTO users (username, user_password) VALUES (?, ?)';
  const fields = [username, password];
  const addData = await queryDb(query, fields);

  // Find
  return (await findById(addData.insertId))[0];
}

// Find user by id
const findById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const fields = [id];
  return await queryDb(query, fields);
}

// Find user by username
const findByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username=?';
  const fields = [username];
  return await queryDb(query, fields);
}

// Check if username already taken
const isUsernameTaken = async (username) => {
  const users = await findByUsername(username);
  return users.length === 0 ? false : true;
}

// Validate user
const validateUser = async ({username, password}) => {

  // Find user
  const query = 'SELECT * FROM users WHERE username=? AND user_password=?';
  const fields = [username, password];
  const user =  await queryDb(query, fields);

  // Check if correct output
  if(user.length !== 1) throwError(401, 'Nieprawidłowe dane logowania');

  return user[0];
}


module.exports = {
  addUser, findByUsername, isUsernameTaken, validateUser
}