const express = require('express');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Transaction');
require('./models/Budget');

const app = express();
let port = 8085;





app.listen(port, () => {
    console.log("Server running on port: " + port);
})