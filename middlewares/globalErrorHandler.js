const globalErrorHandler = (error, req, res, next) => {
  const {
    statusCode = 500,
    message = "Something went wrong, please try again later",
  } = error;
  res.status(statusCode).json({ message });
};

module.exports = { globalErrorHandler };
