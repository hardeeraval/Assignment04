// userRoutes.js

const express = require('express');
const router = express.Router();

// Route for getting all users
router.get('/', (req, res) => {
  // Logic to fetch all users
  res.send('Get all users');
});

// Route for getting a specific user by ID
router.get('/:userId', (req, res) => {
  // Logic to fetch user by ID
  res.send('Get user ' + req.params.userId);
});

// Route for creating a new user
router.post('/', (req, res) => {
  // Logic to create a new user
  res.send('Create new user');
});

// Route for updating a user by ID
router.put('/:userId', (req, res) => {
  // Logic to update user by ID
  res.send('Update user ' + req.params.userId);
});

// Route for deleting a user by ID
router.delete('/:userId', (req, res) => {
  // Logic to delete user by ID
  res.send('Delete user ' + req.params.userId);
});

module.exports = router;
