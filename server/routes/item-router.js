const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

router.get('/books', ItemController.getItems);
router.get('/book/:id', ItemController.getItemById);
router.post('/book-create', ItemController.createItem);
router.patch('/book-update/:id', ItemController.updateItem);
router.patch('/book-rent/:id', ItemController.updateItemRent);
router.delete('/book/:id', ItemController.deleteItem);

module.exports = router;
