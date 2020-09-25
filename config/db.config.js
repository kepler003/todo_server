
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT
})

db.connect((err) => {
  if(err) console.log(err);
  console.log('Connected to database');
})

module.exports = db;
