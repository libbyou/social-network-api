const { Schema, model } = require('mongoose');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [],
  },
  {
    toJSON: {
        virutals: true,
        getters: true,
    },
  }
);

thoughtSchema
  .virtual('formatDate')
  .get(function(){
    formatDate = moment(this.createdAt).format('LL')
    return formatDate;
  });
 thoughtSchema
  .virtual('reactionCount')
  .get(function(){
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought
