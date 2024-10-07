//import jsonData from '../public/courseDetails.json' assert { type: 'json' };

const express = require('express');
const cors = require('cors');
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

//const products = require(jsondata);
const products = require("../public/courseDetails.json");

// Middleware
router.use(cors());

// Routes
router.get('/', (req, res) => {
  res.send('Hello world');
});

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product11 = products.find((n) => n._id === id);

  if (product11) {
    res.json(product11);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Using router (optional, if you expand later)
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);

// Uncomment if running locally
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
