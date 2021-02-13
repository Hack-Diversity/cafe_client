// const express = require('express');
//
// const ItemController = require('../controllers/item-controller');
//
// const router = express.Router();
//
// router.get('/books', ItemController.getItems);
// router.get('/book/:id', ItemController.getItemById);
// router.post('/books-create', ItemController.createItem);
// router.put('/book/:id', ItemController.updateItem);
// router.delete('/book/:id', ItemController.deleteItem);
//
// module.exports = router;
//using express to create routes
const express = require('express');
//call book schema file
const Book = require('../models/item-model');
//call custom errors file - PA
const errors = require('../lib/custom_errors');
// call function handle404 from custom_errors - PA
const error404 = errors.handle404;
//create express router and assign to a variable - PA
const router = express.Router();

//INDEX - GET all books
//calls extension /books and passes params req, res and next -PA
router.get('/books', (req, res, next) => {
  //uses mongoose find() to find all entries on the database
  Book.find()
  //if successful, map the entries and turn into object
    .then(books => {
      return books.map(book => book.toObject())
    })
    //once an object return success code 200 and display
    //as json
    .then(books => res.status(200).json({ books: books }))
    //if error next
    .catch(next)
    // -PA
});

//SHOW - GET a book by id
router.get('/book/:id', (req, res, next) => {
  //requires the id of the resource to find it by id
  //uses mongoose findById
  Book.findById(req.params.id)
  //handles the error message
  .then(error404)
  //if findById is successful, respond with code 200 OK
  //make it look pretty with json
  .then(book => res.status(200).json({ book: book.toObject()}))
  //if an error occours pass it to handler
  .catch(next)
  // -PA
})

// CREATE
// POST /surveys
router.post('/book-create', (req, res, next) => {
  // require the entire body of the book schema
  const book = req.body.book
  //create using variable book for the body
  Book.create(book)
    // respond to succesful `create` with status 201 and JSON of new "survey"
    .then(book => {
      res.status(201).json({ book: book.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

//UPDATE - not used
//PATCH to be used with id
// router.patch('/books/:id', blanks, (req, res, next) => {
//
//   Book.findByIdAndUpdate(req.param.id)
//   .then(error404)
//   // .then(book => {
//   //   return book.updateOne(req.body.book)
//   // })
//   .then(() => res.sendStatus(204))
//   .catch(next)
// })

// UPDATE - PATCH changes one entry by id
router.patch('/book/:id', (req, res, next) => {
  //mongoose findByIdAndUpdate selects the id of the instance
  //and sets by requiring the body of the book
  Book.findByIdAndUpdate(req.params.id, {
    $set: req.body.book
})
//handle the error
  .then(error404)
  // .then(book => {
  //   return book.updateOne(req.body.book)
  // })\
  //if successful return status 204
  .then(() => res.sendStatus(204))
  //if not, catch next
  .catch(next)
  // PA
})

//DELETE a book by ID
router.delete('/book/:id', (req, res, next) => {
  //uses the variable Book for the book.js Schema
  //findByIdAndRemove Mongoose
  Book.findByIdAndRemove(req.params.id)
  //handle errors
  .then(error404)
  //if successful passes sucess status
  .then(() => res.sendStatus(204))
  //if not, error
  .catch(next)
  // PA
})
// exports this page
//Pseudo and file code by PA
module.exports = router;
