/* eslint-disable no-unused-vars */
// error handler
module.exports = (err, req, res, next) => res.status(err.status || 500).json({
  status: err.status || 500,
  message: err.message,
});
