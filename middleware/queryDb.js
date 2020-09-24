
const db = require('../config/db.config');


const queryDb = async (query, fields) => {
  return new Promise((resolve, reject) => {
    db.query(query, fields, (err, result) => err ? reject(err) : resolve(result));
  })
}


module.exports = queryDb;