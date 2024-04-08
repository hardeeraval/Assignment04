// productRoutes.js

const express = require('express');
const router = express.Router();

// Route for getting all products
router.get('/', (req, res) => {
  // Logic to fetch all products
  res.send('Get all products');
});

// Route for getting a specific product by ID
router.get('/:productId', (req, res) => {
  // Logic to fetch product by ID
  res.send('Get product ' + req.params.productId);
});

// Route for creating a new product
router.post('/', (req, res) => {
  // Logic to create a new product
  res.send('Create new product');
});

// Route for updating a product by ID
router.put('/:productId', (req, res) => {
  // Logic to update product by ID
  res.send('Update product ' + req.params.productId);
});

// Route for deleting a product by ID
router.delete('/:productId', (req, res) => {
  // Logic to delete product by ID
  res.send('Delete product ' + req.params.productId);
});

module.exports = router;
