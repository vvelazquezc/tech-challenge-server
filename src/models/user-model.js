const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = Schema(
  {
    firebaseId: {
      type: String,
      required: [true, 'The firebaseId is required'],
      unique: true,
    },
    username: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      required: [true, 'The email is required'],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema, 'User');

module.exports = User;
