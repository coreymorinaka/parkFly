'use strict'

var sequelize = require('../config/db');
var Sequelize = require('sequelize');
var { Employee } = require('./employee');

const Car = sequelize.define('car', {
    make: Sequelize.STRING,
    model: Sequelize.STRING,
    year: Sequelize.SMALLINT,
    color: Sequelize.STRING,
    licensePlate: Sequelize.STRING,
    permitNumber: Sequelize.STRING
});

Employee.hasMany(Car);

module.exports = { Car }
