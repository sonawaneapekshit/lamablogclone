import express from "express"
import Post from '../model/post.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
})

export default router