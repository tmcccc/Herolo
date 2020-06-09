const AppError = require('../utils/appErr');

const ValidatorError = (theErr) => {
  return new AppError(theErr.message, 400);
};
const errorProduction = (theErr, res) => {
  if (theErr.ourError === true) {
    res.status(theErr.statusCode).json({
      status: 'error',
      message: theErr.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'somthing went very bad',
    });
  }
};

module.exports = (theErr, req, res, next) => {
  theErr.statusCode = theErr.statusCode || 500;
  theErr.status = theErr.status || 'error';

  let { ...error } = theErr;

  error.message = theErr.message;

  if (theErr.name === 'ValidationError') error = ValidatorError(theErr);

  errorProduction(error, res);
};
