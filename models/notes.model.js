
const db = require('../config/db.config');

exports.findAllNotes = async () => {

  const query = `SELECT * FROM notes`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  })
}