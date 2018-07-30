const mongoose = require( 'mongoose' );

// all model classes will inherit from
// the mongoose.Schema class

const personschema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter a person name.'
  },
  description: {
    type: String,
    required: 'Please enter a person description.'
  },
  price: {
    type: Number,
    required: 'Please enter an age value.'
  }
});

// make this class public
module.exports = mongoose.model( 'Person', personschema );
