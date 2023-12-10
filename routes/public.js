// Importing the Express framework
const express = require('express');

// Importing the publicController to handle route logic
const publicController = require('../controllers/public');

// Creating an instance of the Express Router
const router = express.Router();

// Handling GET requests to the root endpoint
router.get('/', async (req, res, next) => {
  // Rendering the 'index' view
  res.render('index');
});

// Handling POST requests to the '/room' endpoint using the getRoom function from the publicController
router.post('/room', publicController.getRoom);

// Exporting the router for use in other parts of the application
module.exports = router;
