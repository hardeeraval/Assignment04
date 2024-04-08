// commentRoutes.js

const express = require('express');
const router = express.Router();

// Route for getting all comments
router.get('/', (req, res) => {
  // Logic to fetch all comments
  res.send('Get all comments');
});

// Route for getting a specific comment by ID
router.get('/:commentId', (req, res) => {
  // Logic to fetch comment by ID
  res.send('Get comment ' + req.params.commentId);
});

// Route for creating a new comment
router.post('/', (req, res) => {
  // Logic to create a new comment
  res.send('Create new comment');
});

// Route for updating a comment by ID
router.put('/:commentId', (req, res) => {
  // Logic to update comment by ID
  res.send('Update comment ' + req.params.commentId);
});

// Route for deleting a comment by ID
router.delete('/:commentId', (req, res) => {
  // Logic to delete comment by ID
  res.send('Delete comment ' + req.params.commentId);
});

module.exports = router;
