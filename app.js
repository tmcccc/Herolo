const express = require('express');
const messageRouter = require('./routes/messageRouter');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const errorMiddelware = require('./controller/errorController');
const AppError = require('./utils/appErr');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json({ limit: '100kb' }));

app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

const limiter = rateLimit({
  max: 250,
  windowMs: 15 * 60 * 1000,
  messgae: 'to many requests from this ip please try in a hour',
});

app.use('/api', limiter);

app.use('/api/v1/messages', messageRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.all('*', (req, res, next) => {
  const err = new AppError(`this ${req.originalUrl} does not exist`, 404);
  next(err);
});

app.use(errorMiddelware);

module.exports = app;
