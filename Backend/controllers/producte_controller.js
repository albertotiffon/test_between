'use strict'

var validator = require('validator');
var Productes = require('../models/productes');
var fs = require('fs');
var path = require('path');

var controller = {
    getAllProductes: (req, res) => {
        var query = Productes.find({});
        query.sort('-_id').exec((err, productes) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al devolver productos"
                });
            }
            if (!productes || productes.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Error, no hay productos"
                });
            }
            return res.status(200).send({
                status: "success",
                message: "Validacion correcta",
                productes
            });
        });
    },

    getProductesByCustomer: (req, res) => {
        var id = req.params.customerid;
        var query = Productes.find().where("customerId", id.toString());
        query.sort('-_id').exec((err, productes) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al devolver productos"
                });
            }
            if (!productes || productes.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Error, no hay productos"
                });
            }
            return res.status(200).send({
                status: "success",
                message: "Validacion correcta",
                productes
            });
        });
    }
}

module.exports = controller;