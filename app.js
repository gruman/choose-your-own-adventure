// Importing the express module
const express = require('express');

// Creating an instance of the express application
const app = express();

// Requiring the body-parser module for handling request bodies
var bodyParser = require('body-parser');

// Setting the port number
const port = 8080;

// Requiring the path module
const path = require('path');

// Setting the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Using body-parser middleware to parse URL-encoded and JSON bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up CORS headers to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Importing and using the routes defined in 'public.js'
const publicRoutes = require('./routes/public');
app.use('/', publicRoutes);

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
