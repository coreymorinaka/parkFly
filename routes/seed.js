var express = require('express');
var router = express.Router();

var seed = require('../config/seed');

//http://localhost:3000/api/v1/seed
//Seed from car --> employee --> company --> property --> property manager
router.post('/car', seed.createCar);
router.post('/employee', seed.createEmployee);
router.post('/company', seed.createCompany);
router.post('/property', seed.createProperty);
router.post('/propertymanager', seed.createPropertyManager);

module.exports = router;