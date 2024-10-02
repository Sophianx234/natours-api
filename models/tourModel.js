const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    name: {
      type: String, required: [true, 'a tour must have a name'], unique: true
    },
    rating: {type: Number, required: true , default: 4.5},
    price: {
      type: Number
    }
  
  });
  
  const Tour = mongoose.model('Tour',tourSchema) 
  
  const testTour = new Tour({
    name: 'Damian',
    rating: 6,
    price: 10
  })

  module.exports = Tour