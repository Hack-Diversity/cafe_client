const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

router.get('/library', ItemController.getItems);
router.get('/book/:id', ItemController.getItemById);
router.post('/book', ItemController.createItem);
router.put('/book/:id', ItemController.updateItem);
router.delete('/book/:id', ItemController.deleteItem);

module.exports = router;
