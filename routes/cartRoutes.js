const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route for adding a product to the cart
router.post('/:userId/add', cartController.addToCart);

// Route for removing a product from the cart
router.delete('/:userId/remove/:productId', cartController.removeFromCart);

// Route for clearing the cart
router.delete('/:userId/clear', cartController.clearCart);

// Route for getting the cart for a specific user
router.get('/:userId', cartController.getCart);

module.exports = router;
