const monggose = require('mongoose')

const BookSchema = new monggose.Schema({
    title : String,
    author : String,
    description : String,
    release_year : Number,
    genre : String
});

const Book = monggose.model('Book', BookSchema);

module.exports = Book;