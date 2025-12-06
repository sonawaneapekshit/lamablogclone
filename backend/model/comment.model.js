import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // linkage of post comment to user who created the post
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post ', // linkage of post comment to the post
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Comment', commentSchema);
