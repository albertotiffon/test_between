'use strict'

var validator = require('validator');
var Clients = require('../models/clients');
var fs = require('fs');
var path = require('path');

var controller = {

    getClient: (req, res) => {

        var query = Clients.find({});

        query.sort('-_id').exec((err, clients) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al devolver clientes"
                });
            }
            if (!clients) {
                return res.status(404).send({
                    status: "error",
                    message: "Error, no hay clientes"
                });
            }
            return res.status(200).send({
                status: "success",
                message: "Validacion correcta",
                clients
            });
        });
    }

}

module.exports = controller;