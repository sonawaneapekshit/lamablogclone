import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: number,
      default: false,
    },
    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Post', postSchema);
