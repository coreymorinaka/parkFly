var sequelize = require('../config/db');
var Sequelize = require('sequelize');
var { Property } = require('./property');

var Company = sequelize.define('company', {
   
    companyName: Sequelize.STRING,
    companyAddress: Sequelize.STRING,
    companyEmail: Sequelize.STRING,
    companyPhone: Sequelize.BIGINT,
    companySuiteNumber: Sequelize.INTEGER,
    companyContact: Sequelize.STRING,
    companyMaxSpaces: Sequelize.INTEGER,
});

Property.hasMany(Company);

module.exports = { Company }