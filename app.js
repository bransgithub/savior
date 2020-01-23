const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:8081, bransgithub.github.io/savior");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

//Route Setup
const BudgetRoutes = require('./routes/budget.route');
const TransactionRoutes = require('./routes/transaction.route');

app.use('/budget', BudgetRoutes);
app.use('/transaction', TransactionRoutes);

//MongoDB Setup
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB could not connect:'));

let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port: " + port);
})