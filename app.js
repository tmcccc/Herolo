const express = require('express');
const messageRouter = require('./routes/messageRouter');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

app.use(express.json({ limit: '100kb' }));

app.use(mongoSanitize());

app.use('/api/v1/messages', messageRouter);

module.exports = app;
