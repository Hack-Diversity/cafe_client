const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publication_year: {
            type: String,
            required: false
        },
        publisher: {
            type: String,
            required: false
        },
        copies: {
            type: Number,
            required: true
        },
        available: {
            type: Number,
            required: true
        },
        isbn: {
            type: Number,
            required: true
        }
    }, {
     timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        daysOfWeek: {
            type: Map,
            of: String,
            required: false
        },
        timeframeNote: {
            type: String,
            required: false
        },
        priority: {
            type: Number,
            required: false
        },
        content: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Item);
*/
