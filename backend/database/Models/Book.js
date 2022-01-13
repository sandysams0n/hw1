const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  isbn: {
    type: Number
  }
}, {
    collection: 'books'
  })

module.exports = mongoose.model('Book', bookSchema)