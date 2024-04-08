// controllers/cartController.js

const Cart = require('../models/cart2');

// Create a new item in the cart
exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cartItem = new Cart({ userId, productId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all items in the cart
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single item in the cart by ID
exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (cartItem) {
      res.json(cartItem);
    } else {
      res.status(404).json({ message: 'Item not found in the cart' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update quantity of item in the cart
exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
    if (cartItem) {
      res.json(cartItem);
    } else {
      res.status(404).json({ message: 'Item not found in the cart' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an item from the cart by ID
exports.deleteCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (cartItem) {
      res.json({ message: 'Item deleted from the cart' });
    } else {
      res.status(404).json({ message: 'Item not found in the cart' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
