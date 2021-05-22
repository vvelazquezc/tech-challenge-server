const mongoose = require("mongoose");
const { Schema } = mongoose;

const MediaSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    format: {
      type: String,
      trim: true,
      required: [true, "The format is required"],
    },
    url: {
      type: String,
      trim: true,
      required: [true, "The url is required"],
    },
    thumbnailUrl: {
      type: String,
      trim: true,
      required: [true, "The thumbnailUrl is required"],
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Media = mongoose.model("Media", MediaSchema, "Media");

module.exports = Media;
