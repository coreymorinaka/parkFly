var sequelize = require('../config/db');
var Sequelize = require('sequelize');
var { PropertyManager } = require('./propertymanager')

const Property = sequelize.define('property', {
    locationName: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.INTEGER
});

PropertyManager.hasMany(Property);

module.exports = { Property }