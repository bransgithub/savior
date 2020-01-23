const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BudgetSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true, max: 60},
    amount: {type: Number, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    recurring: {type: Boolean, required: true},
    transactions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}]
})

module.exports = mongoose.model('Budget', BudgetSchema);