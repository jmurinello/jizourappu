const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = require('./app');

const server = express();

// Register Node.js middleware
server.use(logger('dev'));
server.use('/', express.static(path.join(process.cwd(), 'client/dist')));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// POST /tokens
server.post('/api/tokens', app.getTokens);

module.exports = server;
