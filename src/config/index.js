const dotenv = require('dotenv');

dotenv.config();

const config = {
  client: {
    URL: process.env.CLIENT_URL || 'http://localhost:3000/',
  },
  app: {
    PORT: process.env.PORT || 4000,
  },
  db: {
    url: `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_PROJECT}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  },
};

module.exports = {
  config,
};
