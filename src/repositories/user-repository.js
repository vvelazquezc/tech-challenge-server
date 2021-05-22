const { User } = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDBQuery(User.create(options));
  }

  find(query) {
    return normalizeDBQuery(User.findOne(query));
  }

  findUser(query) {
    return normalizeDBQuery(User.findOne(query).select('email username'));
  }
}

module.exports = new UserRepository();
