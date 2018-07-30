var express = require('express');
var router = express.Router();

// create a link to our drink model
var personsController = require('../controllers/personController');

// index (http://my-app.com/persons)
router.get( '/', personsController.index );

//router for classmate one
router.get( '/albert', personsController.albert );

//router for classmate one
router.get( '/robin', personsController.robin);

//router for classmate one
router.get( '/courtney', personsController.courtney);

// makes our file public to the application
module.exports = router;
