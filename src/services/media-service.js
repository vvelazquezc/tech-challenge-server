const { MediaRepository, UserRepository } = require("../repositories");

module.exports = {
  getOne: async ({ id }) => {
    return MediaRepository.findOne({
      _id: id,
    });
  },
  getActive: async ({ search, username, format }) => {
    const { data: user } = await UserRepository.find({
      ...(username && { username: new RegExp(username, "i") }),
    });

    const isGif = format === "gif";
    const formatQuery = isGif ? { format } : { format: { $ne: "gif" } };

    const result = MediaRepository.find({
      active: true,
      ...(username && user._id && { userId: user._id }),
      ...(format && formatQuery),
      ...(search && {
        tags: search.split(" ").filter((word) => word.length > 3),
      }),
    });

    return result;
  },
  save: async ({ format, url, thumbnailUrl, cloudinaryId, tags, user }) => {
    return MediaRepository.create({
      format,
      url,
      thumbnailUrl,
      cloudinaryId,
      tags,
      user,
    });
  },
};
