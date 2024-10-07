
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

const products = require("./public/courseDetails.json");

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((n) => n._id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});



// Uncomment if running locally
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
