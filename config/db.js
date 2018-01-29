const Sequelize = require('sequelize');

const sequelize = new Sequelize('DBname', 'username', 'password', {
  host: 'URL',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// DROP TABLE cars
// DROP TABLE companies
// DROP TABLE employees
// DROP TABLE properties
// DROP TABLE propertymanagers

module.exports = sequelize;
