const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BasicDB747!',
  database: 'todo'
})

db.connect((err) => {
  if(err) throw err;
  console.log('Connected to database');
})

module.exports = db;
