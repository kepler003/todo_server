
const userModel = require('../models/user.model');
const handleError = require('../middleware/handleError');


// Sign up
exports.signUp = async (req, res) => {

  try {
  
    await userModel.signUp({
      username      : req.body.username,
      user_password : req.body.password
    });
  
    res.send('Log in: Not yet implemented');

  } catch(err) {

    handleError(err, res);
  }
}

// Log in
exports.logIn = (req, res) => {
  res.send('Log in: Not yet implemented');
};

// Log out
exports.logOut = (req, res) => {
  res.send('Log out: Not yet implemented');
};
