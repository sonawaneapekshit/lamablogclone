import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // linkage of post to user who created the post
      required: true,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String, // short description
    },
    content: {
      type: String, // content of the post
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Post', postSchema);
