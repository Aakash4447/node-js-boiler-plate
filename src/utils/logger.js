const winston = require('winston');

const { format } = winston;

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
