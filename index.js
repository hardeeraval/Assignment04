// index.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cartController = require('./controllers/cart2Controller');
const PORT = process.env.PORT || 3000;

// Connect to MongoDB using the provided connection string
mongoose.connect('mongodb+srv://heet:12342611@cluster2.tucsf6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/productRoutes'));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
//app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.post('/cart', cartController.addToCart);
app.get('/cart', cartController.getAllCartItems);
app.get('/cart/:id', cartController.getCartItemById);
app.put('/cart/:id', cartController.updateCartItemQuantity);
app.delete('/cart/:id', cartController.deleteCartItem);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
