'use strict'

var express = require('express');
var ClientController = require('../controllers/client_controller');

var router = express.Router();

const {
  path
} = require('../app');

//rutas utiles
router.get('/client', ClientController.getClient);

module.exports = router;