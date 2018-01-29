var sequelize = require('../config/db');
var { PropertyManager } = require('../models/propertymanager');
var { Property } = require('../models/property');


function index(req, res) {
    PropertyManager.findAll({
        include: Property
    })
        .then(function (propertymanagers) {
            res.status(200).json(propertymanagers);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function show(req, res) {
    PropertyManager.findById(req.params.id, {
        include: Property
    })
        .then(function (propertymanager) {
            res.status(200).json(propertymanager);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function create(req, res) {
    PropertyManager.create(req.body)
      .then(function (newPropertyManager) {
        res.status(200).json(newPropertyManager);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }

  function update(req, res) {
    PropertyManager.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedPropertyManager) {
      res.status(200).json(updatedPropertyManager);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  function destroy(req, res) {
    PropertyManager.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedPropertyManager) {
      res.status(200).json(deletedPropertyManager);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

module.exports = { index, show, create, update, destroy }
