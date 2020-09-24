const express = require('express');
const app = express();
const db = require('./config/db.config');


const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index.js'));


app.listen(PORT, () => {
  console.log(`Server is up at port ${PORT}`);
})