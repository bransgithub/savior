const express = require('express');
const router = express.Router();

const budgetController = require('../controllers/budget.controller');

module.exports = router;

router.get('/', budgetController.budgetDetails);
router.get('/:id', budgetController.budgetDetailsById);
router.post('/', budgetController.budgetCreate);
router.post('/:id/addtransaction', budgetController.budgetAddTransaction);
router.put('/:id', budgetController.budgetUpdate);
router.delete('/:id', budgetController.budgetDelete);
