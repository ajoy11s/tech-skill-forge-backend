import coursedata from "../public/courseDetails.json";

const express = require('express');
const cors = require('cors');
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

const port = process.env.port || 3000;

const products = require(coursedata);


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const productIdByProducts = products.filter((n) => n._id === id);

  if (productIdByProducts.length > 0) {
    res.send(productIdByProducts);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});


// app.listen(port, () => {
//   console.log(`Hello world ${port}`);
// });
app.use("./netlify/functions/app", router);
module.exports.handler = serverless(app);