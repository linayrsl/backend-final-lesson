const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const apiRouter = require('./config/routes');
const mongoose = require('mongoose');
const port = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({extended:  false}));
app.use(bodyParser.json());
app.use(apiRouter);

connect();


function listen() {
    app.listen(port, () => console.log('Server is listening on port ' + port));
}

function connect() {
    mongoose.connect('mongodb://localhost:27017/example', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', err => console.log(err));
    db.once('open', listen);
}