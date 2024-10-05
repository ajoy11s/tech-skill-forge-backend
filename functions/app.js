//import coursedata from "../public/courseDetails.json";

const express = require('express');
const cors = require('cors');
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

const port = process.env.port || 3000;

//const products = require(coursedata);

const products = [
  {
      "_id": "635781fc026beb5ac77e3a7b",
      "course_id": "04",
      "title": "Complete ReactJS",
      "details": "Perfect starting point for any React beginner. Learn the basics of modern React by solving 140+ interactive coding challenges and building eight fun projects.create accounts, unlock accounts, mine, transact, transfer Ethers, and check balances",
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
  {
      "_id": "635781fc9f3cb72f33e23bf1",
      "course_id": "01",
      "title": "Javascript Pro",
      "details": "This course of the Blockchain specialization provides a broad overview of the essential concepts of blockchain technology by initially exploring the Bitcoin protocol followed by the Ethereum protocol to lay the foundation necessary for developing applications and programming. You will be equipped with the knowledge needed to create nodes on your personal Ethereum blockchain, create accounts, unlock accounts, mine, transact, transfer Ethers, and check balances.",
      "level": "Advanced",
      "student": "60",
      "duration": "90 Hours",
      "price": "1200",
      "assessments": "Combined",
      "author": "Per Harald Borgen",
      "ratings": "4.8/5",
      "lession": "42 Lessons",
      "author_img_url": "https://scrimba.com/avatars/uid/user-3/256",
      "img_url": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png"
  },
  {
      "_id": "635781fcde99e00c122deece",
      "course_id": "03",
      "title": "Web Design & Development",
      "details": "Learn to build your very first web pages with this four hour course on HTML and CSS. Created by Kevin Powell, one of the most popular HTML & CSS instructors on the web.Learning HTML and CSS to design and build professional after succesfull completion",
      "level": "Beginners",
      "ratings": "4.37/5",
      "lession": "25",
      "student": "80",
      "duration": "30 Hours",
      "price": "500",
      "assessments": "Self",
      "author": "Kevin Powell",
      "author_img_url": "https://scrimba.com/avatars/kevin-powell/256",
      "img_url": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png"
  },
  {
      "_id": "635781fc7fbcbfb02557c401",
      "course_id": "05",
      "title": "Digital Marketing",
      "details": "After completing the course students will become expert Digital Marketers. They will become certified in social media marketing(Ex: Facebook, Instagram, Linkedin & Pinterest Marketing), Search Engine Optimization, Google Ads(PPC), Google Analytics, Google Tag Manager, YouTube marketing, Email Marketing, Reddit Marketing and many more.",
      "level": "Specialized",
      "ratings": "4.8/5",
      "lession": "40",
      "student": "50",
      "duration": "25 Hours",
      "price": "1000",
      "assessments": "Research",
      "author": "Shanklin Langford",
      "author_img_url": "https://scrimba.com/avatars/uid/u7LwZys6/256",
      "img_url": "https://coderstrustbd.com/wp-content/uploads/2021/06/dgm-n.jpg"
  },
  {
      "_id": "635781fc8015abd8a818270a",
      "course_id": "02",
      "title": "CCNA and Networking",
      "details": "Take a top-rated Cisco Certified Network Associate (CCNA) training course on Udemy. From networking fundamentals to exam prep lab courses, we've got options to help get you ready for the CCNA exam. Train up now and gain valuable skills in the IT field.",
      "level": "Certified",
      "ratings": "4.8",
      "lession": "60",
      "student": "100",
      "duration": "50 Hours",
      "price": "1200",
      "assessments": "Certifications",
      "author": "Aric Rindfleisch",
      "author_img_url": "https://coursera-instructor-photos.s3.amazonaws.com/6d/6c8b1053ba11e49b9ba916b58830db/photo.jpg",
      "img_url": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/2b/6e5900607d11e7bf941ff25e8a1f15/tcpip.png?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25"
  },
  {
      "_id": "635781fcf602e84d57cb81f2",
      "course_id": "06",
      "title": "Graphics Design",
      "details": "Our graphic designing course outline will help you in learning the design tools to create attractive design templates. All our mentors are highly qualified and have proven records. They are all successful in both their freelancing and professional career. After completing this course, you will get many graphic design jobs in the freelance marketplace",
      "level": "Beginners",
      "ratings": "4.7/5",
      "lession": "20",
      "student": "60",
      "duration": "40 Hours",
      "price": "800",
      "assessments": "Self",
      "author": "Mike Yao",
      "author_img_url": "https://coursera-instructor-photos.s3.amazonaws.com/d3/b3d720666811e7a3a2418f414130f7/_DSC2072.jpg",
      "img_url": "https://coderstrustbd.com/wp-content/uploads/2021/06/GD.jpg"
  }
]


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
app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);