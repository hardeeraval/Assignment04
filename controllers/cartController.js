// cartController.js

const Cart = require('../models/cart');

// Controller functions for Cart entity

// Get the cart by user ID
exports.getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product', 'description pricing');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a product to the cart
exports.addToCart = async (req, res) => {
  const { userId } = req.params;
  const { product, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(item => item.product.toString() === product);

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
