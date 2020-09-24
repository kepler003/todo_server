
const throwError = require('../middleware/throwError');
const handleError = require('../middleware/handleError');
const userModel = require('../models/user.model');
const noteModel = require('../models/note.model');


// Sign up
exports.signUp = async (req, res) => {

  try {
    
    // Get user data
    const {username, password} = req.body;
    
    
    // Validate credentials
    if(!username && !password) throwError(401, 'Nieprawidłowe dane do rejestracji');
    if(!username)              throwError(401, 'Nieprawidłowa nazwa użytkownika');
    if(!password)              throwError(401, 'Nieprawidłowe hasło');

    // Check if username taken
    if(await userModel.isUsernameTaken(username)) throwError(409, 'Nazwa użytkownika jest już używana');
    
    
    // Add user
    const user = await userModel.addUser({username, password});

    // Create session
    req.session.userId = user.insertId;


    // Find notes
    // ???
  
    res.send('Sign up: Not yet implemented');

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
}

// Log in
exports.logIn = async (req, res) => {

  try {

    // Get user data
    const {username, password} = req.body;
        
        
    // Validate credentials
    if(!username || !password) throwError(401, 'Nieprawidłowe dane logowania');

    
    // Find user
    const user = await userModel.findByUsernameAndPassword({username, password});

    if(user.length === 0) throwError(401, 'Nieprawidłowe dane logowania');


    // Sign in
    req.session.userId = user[0].id;


    // Find notes
    // ???


    res.send('Log in: Not yet implemented');

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
};

// Log out
exports.logOut = (req, res) => {

  try {

    req.session.destroy();
    res.sendStatus(200);

  } catch(err) {

    console.log(err);
    handleError(err, res);
  }
};
