const getMessage = require('./get-message');

module.exports = (messageKey, data, statusCode = 200) => ({
  code: statusCode,
  message: getMessage(messageKey),
  data,
});
