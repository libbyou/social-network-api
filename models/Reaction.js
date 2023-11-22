const { Schema, model } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('formatDate')
  .get(function(){
    formatDate = moment(this.createdAt).format('LL')
    return formatDate;
  });

// Initialize our Post model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;