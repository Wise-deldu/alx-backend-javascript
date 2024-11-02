const express = require('express');
const app = express();
const PORT = 7865;

app.use(express.json()); 

// Root endpoint
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// GET /cart/:id route with numeric-only path validation
app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`); // Responds with a message including the cart ID
});

// GET /available_payments endpoint to return available payment methods
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// POST /login endpoint
app.post('/login', (req, res) => {
  const username = req.body?.userName || '';
  res.send(`Welcome ${username}`);
});


app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
