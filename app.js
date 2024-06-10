const express = require('express');
const mongoose = require('./libs/mongodb');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/items', async (req, res) => {
  const { name, description, price } = req.body;
  const item = new Item({ name, description, price });
  await item.save();
  res.status(201).json(item);
});

// User routes
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  });
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });