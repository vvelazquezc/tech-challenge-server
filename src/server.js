const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { json } = require('body-parser');
const cors = require('cors');

const { config } = require('./config');
const { errorMiddleware } = require('./middlewares');

const { userRouter, mediaRouter } = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: '*',
  })
);

app.use('/media', mediaRouter);
app.use('/user', userRouter);

app.get('/health', (req, res) => {
  res.status(200).send({
    healthy: true,
  });
});

app.use(errorMiddleware);

module.exports = {
  app,
};
