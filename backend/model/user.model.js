import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    savedPosts: {
      type: [String],// string array with post ids
      default: [],
    }
  },
  { timestamps: true }
);
// collection name is User
export default mongoose.model("User", userSchema)
