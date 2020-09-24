
const throwError = (status = 500, message) => {
  
  let errObj = {status};
  if (message) errObj.message = message;
  
  throw new Error(JSON.stringify( errObj ));
}


module.exports = throwError;