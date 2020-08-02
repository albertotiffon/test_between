'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

var url = "mongodb://localhost:27017/between";
var opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.Promise = global.Promise;
mongoose.connect(url, opciones)
    .then(() => {
        app.listen(port, () => {
            console.log("escuchando puerto:" + port);
        })
    });