var sequelize = require('../config/db');
var { Car } = require('../models/car');

function index(req, res) {

    Car.findAll()
        .then(function (cars) {
            res.status(200).json(cars);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function show(req, res) {
    Car.findById(req.params.id)
        .then(function (car) {
            res.status(200).json(car);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function create(req, res) {
    Car.create(req.body)
        .then(function (newCar) {
            res.status(200).json(newCar);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function update(req, res) {
    Car.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(function (updatedCar) {
            res.status(200).json(updatedCar);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function destroy(req, res) {
    Car.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (deletedCar) {
            res.status(200).json(deletedCar);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

module.exports = { index, show, create, update, destroy }