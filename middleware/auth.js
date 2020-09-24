
const auth = (req, res, next) => {
  if(!res.session) {
    res.sendStatus(401);
  } else {
    next();
  };
}


module.exports = auth;