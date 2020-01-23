const Transaction = require('../models/transaction.model');

exports.transactionDetails = function(req, res, next) {
    Transaction.find(function (err, transactions) {
        if (err) return next(err);
        res.send(transactions);
    })
}

exports.transactionDetailsById = function (req, res, next) {
    Transaction.findById(req.params.id, function (err, transaction) {
        if (err) return next(err); 
        res.send(transaction);
    })
};

exports.transactionCreate = function (req, res, next) {
    let transaction = new Transaction(
        {
            name: req.body.name,
            amount: req.body.amount
        }
    );

    transaction.save(function (err) {
        if (err) return next(err);
        res.send('Transaction item created');
    })
};

exports.transactionUpdate = function (req, res, next) {
    Transaction.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, transaction) {
        if (err) return next(err);
        res.send('Transaction updated.');
    });
};

exports.transactionDelete = function (req, res, next) {
    Transaction.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Transaction deleted.');
    })
};