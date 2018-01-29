var sequelize = require('../config/db');
var Sequelize = require('sequelize');
var { Company } = require('./company');

var Employee = sequelize.define('employee', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    cellNumber: Sequelize.BIGINT
});

Company.hasMany(Employee);

module.exports = { Employee }