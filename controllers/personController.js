var person = require( '../models/person' );

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'Students'
  };

  //start of experiment

  //end of experiment

  person.find()
  .then( function ( persons ) {
    // add the persons to our locals
    locals.person = person;

    // render our view
    res.render( 'person/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};

// Show
exports.show = function ( req, res, next ) {};

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Person'
  };

  res.render( 'persons/new', locals )
};

// Edit
exports.edit = function ( req, res, next ) {};

/* ACTIONS */
// Create
exports.create = function ( req, res, next ) {
  person.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  })
  .then( function () {
    res.redirect( '/persons' )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Update
exports.update = function ( req, res, next ) {};

//Albert page
exports.albert = function ( req, res ) {
  let locals = {
    title: 'Classmate One'
  };
    res.render( 'persons/albert', locals )
};

exports.robin = function ( req, res ) {
  let locals = {
    title: 'Classmate Two'
  };
    res.render( 'persons/robin', locals )
};

exports.courtney = function ( req, res ) {
  let locals = {
    title: 'Classmate Three'
  };
    res.render( 'persons/courtney', locals )
};

// Delete
exports.delete = function ( req, res ) {};
