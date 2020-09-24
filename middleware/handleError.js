
const handleError = (err, res) => {

  try {
    
    const errObj = JSON.parse(err.message);

    if(errObj.message){
      res.status(errObj.status).send({ message: errObj.message });
    } else {
      res.sendStatus(errObj.status);
    }

  } catch (error) {
    res.sendStatus(500);
  }
}


module.exports = handleError;