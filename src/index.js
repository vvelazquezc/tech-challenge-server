const { app } = require('./server');
const { config } = require('./config');
const { connect } = require('./db/connect');

if (!config.app.PORT) {
  throw new Error('App config is invalid');
}

connect().then(() => {
  app.listen(config.app.PORT, async () => {
    console.log(`Server listening on ${config.app.PORT}`);
  });
});
