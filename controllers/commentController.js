const Comment = require('../models/comment');

// Controller functions for Comment entity
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment == null) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createComment = async (req, res) => {
  const comment = new Comment({
    product: req.body.product,
    user: req.body.user,
    rating: req.body.rating,
    images: req.body.images,
    text: req.body.text
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
