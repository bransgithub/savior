const Budget = require('../models/budget.model');
const Transaction = require('../models/transaction.model');

exports.budgetDetails = function(req, res, next) {
    Budget.find().populate('transactions').exec(function (err, budgets) {
        if (err) return next(err);
        res.send(budgets);
    });
}

exports.budgetDetailsById = function (req, res, next) {
    Budget.findById(req.params.id).populate('transactions').exec(function (err, budget) {
        if (err) return next(err); 
        res.send(budget);
    })
};

exports.budgetCreate = function (req, res, next) {
    let budget = new Budget(
        {
            name: req.body.name,
            amount: req.body.amount,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        }
    );

    budget.save(function (err) {
        if (err) return next(err);
        res.send('Budget item created');
    })
};

exports.budgetUpdate = function (req, res, next) {
    Budget.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, budget) {
        if (err) return next(err);
        res.send('Budget updated.');
    });
};

exports.budgetAddTransaction = function (req, res) {
    Budget.findById(req.params.id, function (err, budget) {
        if (err) return next(err); 
        
        let newTransaction = new Transaction(
            {
                name: req.body.name,
                amount: req.body.amount
            }
        );

        newTransaction.save(function (err) {
            if (err) return next(err);
        })

        budget.transactions.push(newTransaction);
        budget.save();
        res.send('Transaction added.');
    })
}

exports.budgetDelete = function (req, res, next) {
    Budget.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Budget deleted.');
    })
};