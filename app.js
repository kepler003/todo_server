
const express = require('express');
const app = express();
const session = require('express-session');


const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret word',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(require('./routes/index.js'));


app.listen(PORT, () => {
  console.log(`Server is up at port ${PORT}`);
})