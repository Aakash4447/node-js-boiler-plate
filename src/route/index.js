const express = require('express');
const httpStatus = require('http-status');

const { version } = require('../../package.json');

const generateResponse = require('../utils/generate-response');

const userRouter = require('./user-router');

const router = express.Router();

router.get('/version', (req, res) => res.status(httpStatus.OK).json(generateResponse('VERSION_FETCHED', { version, env: process.env.NODE_ENV })));

router.use(userRouter());

module.exports = router;
