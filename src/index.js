require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const createHttpError = require('http-errors');

const router = require('./route');
const errorHandler = require('./utils/error-handler');
const getMessage = require('./utils/get-message');
const logger = require('./utils/logger');

const app = express();

// adding cors policy
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// adding headers for security purpose
app.use(helmet());

// to get user's ip instead of docker container ip
app.set('trust proxy', true);

// to know every API call info
app.use((req, res, next) => {
  try {
    logger.info(`API CALL => method: ${req.method}, route: ${req.originalUrl}, ip: ${req.ip}`);
    return next();
  } catch (error) {
    logger.error(`ERROR FROM apiCalling info ==> ${error}`);
    return next(error);
  }
});

app.use(router);

// throwing error for wrong route
app.use((req, res, next) => next(createHttpError(404, getMessage('NOT_FOUND'))));

// error-handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.info(`${process.env.NODE_ENV.toUpperCase()} SERVER is running on port: ${process.env.PORT}`);
});
