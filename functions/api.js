const express = require('express');
const cors = require('cors');
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

const products = [
  {
    "_id": "635781fc026beb5ac77e3a7b",
    "course_id": "04",
    "title": "Complete ReactJS",
    "details": "Perfect starting point for any React beginner. Learn the basics of modern React by solving 140+ interactive coding challenges and building eight fun projects.",
    "lession": "20 Lessons",
    "student": "140",
    "duration": "120 Hours",
    "price": "1000",
    "assessments": "Self",
    "author": "Bob Ziroll",
    "level": "Beginner",
    "ratings": "4.9/5",
    "author_img_url": "https://scrimba.com/avatars/uid/uBmYvSL/256",
    "img_url": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png"
  },
  // ... other products
];

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

// Using router (optional, if you expand later)
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);

// Uncomment if running locally
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
