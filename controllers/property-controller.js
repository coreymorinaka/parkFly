var sequelize = require('../config/db');
var { Property } = require('../models/property');
var { Company } = require('../models/company');

function index(req, res) {
    Property.findAll({
      include: Company
    })
      .then(function (properties) {
        res.status(200).json(properties);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

function show(req, res) {
    Property.findById(req.params.id, {
        include: Company
    })
        .then(function (property) {
            res.status(200).json(property);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}
function create(req, res) {
    Property.create(req.body)
      .then(function (newProperty) {
        res.status(200).json(newProperty);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }

  function update(req, res) {
    Property.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedProperty) {
      res.status(200).json(updatedProperty);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  function destroy(req, res) {
    Property.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedProperty) {
      res.status(200).json(deletedProperty);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

module.exports = { index, show, create, update, destroy }