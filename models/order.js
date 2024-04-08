const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalPrice: { type: Number, required: true },
  shippingAddress: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
