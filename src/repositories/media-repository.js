const { ObjectId } = require("mongoose").Types;
const { Media } = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class MediaRepository {
  create(options) {
    return normalizeDBQuery(Media.create(options));
  }

  find({ active, userId, format, tags } = {}) {
    return normalizeDBQuery(
      Media.find({
        active,
        ...(userId && { user: ObjectId(userId) }),
        ...(format && { format }),
        ...(tags && { tags: { $in: tags } }),
      })
        .sort({ createdAt: -1 })
        .select({
          __v: 0,
          active: 0,
          createdAt: 0,
          updatedAt: 0,
        })
        .populate("user")
    );
  }

  findOne(options) {
    return normalizeDBQuery(Media.findOne(options).populate("user"));
  }
}

module.exports = new MediaRepository();
