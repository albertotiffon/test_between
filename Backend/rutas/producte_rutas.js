'use strict'

var express = require('express');
var producte_controller = require('../controllers/producte_controller');

var router = express.Router();

const {
    path
} = require('../app');

router.get('/productes/', producte_controller.getAllProductes);
router.get('/productescustomer/:customerid', producte_controller.getProductesByCustomer);


module.exports = router;