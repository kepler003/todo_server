
const checkIfLoggedOut = (req, res, next) => {
  if(res.session) {
    res.sendStatus(401);
  } else {
    next();
  };
}


module.exports = checkIfLoggedOut;