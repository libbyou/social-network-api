const { Schema, model } = require('mongoose');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: Date,
      required: true,
      unique: true,
      match: [/^\S+@\S+$/],
    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },
    reactions: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
  },
  {
    toJSON: {
        virutals: true,
        getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
