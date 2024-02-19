function logErrors(error, request, response, next) {
  console.error(error);
  next(error);
};

function errorHandler(error, request, response, next) {
  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
};

module.exports = { logErrors, errorHandler };
