
const throwError = require('../middleware/throwError');
const db = require('../config/db.config');

exports.signUp = async ({username, password}) => {

  throwError(401);

  // const query = `INSERT INTO users (username, user_password) VALUES ('Frank', 'mysecret')`;

  // return new Promise((resolve, reject) => {
  //   db.query('SELECT * FROM books', (err, result) => err ? reject(err) : resolve(result));
  // })
}

exports.logIn = async () => {}

exports.logOut = async () => {}