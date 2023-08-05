const httpMessages = require("../constants/httpMessages");

class HttpError extends Error {
  constructor(
    statusCode = 500,
    message = httpMessages[statusCode] || httpMessages.default
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = { HttpError };
