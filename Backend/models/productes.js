'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProducteSchema = Schema({
    _id: Number,
    productName: String,
    productTypeName: String,
    numeracioTerminal: Number,
    soldAt: Date,
    customerId: String
});

module.exports = mongoose.model('Productes', ProducteSchema);