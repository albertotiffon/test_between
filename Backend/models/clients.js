'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = Schema({
    _int: Number,
    docType: String,
    docNum: String,
    email: String,
    customerId: String,
    givenName: String,
    familyName1: String,
    phone: String
});

module.exports = mongoose.model('Clients', ClientSchema);