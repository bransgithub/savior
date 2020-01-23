const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.controller');

module.exports = router;

router.get('/', transactionController.transactionDetails);
router.get('/:id', transactionController.transactionDetailsById);
router.post('/', transactionController.transactionCreate);
router.put('/:id', transactionController.transactionUpdate);
router.delete('/:id', transactionController.transactionDelete);