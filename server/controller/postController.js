// server/controllers/postController.js
import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('category');
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category');
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json({ message: 'Post deleted' });
};
