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
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
  },
  {
    toJSON: {
        virutals: true,
        getters: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  .get(function(){
    return this.friends.legth;
  });

const User = model('user', userSchema);

module.exports = User;
