const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
    name: {type: String, required: true, max: 60},
    amount: {type: Number, required: true},
    date: {type: Date, required: true}
})

module.exports = mongoose.model('Transaction', TransactionSchema);