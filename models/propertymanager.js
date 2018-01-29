var Sequelize = require('sequelize');
var sequelize = require('../config/db');

var PropertyManager = sequelize.define('propertymanager', {

  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  managementCompany: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  phoneNumber: Sequelize.BIGINT

});

module.exports = { PropertyManager }