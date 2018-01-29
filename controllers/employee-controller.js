var sequelize = require('../config/db');
var { Employee } = require('../models/employee');
var { Car } = require('../models/car');

function index(req, res) {
    Employee.findAll({
      include: Car
    })
      .then(function (employees) {
        res.status(200).json(employees);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

function show(req, res) {
    Employee.findById(req.params.id, {
        include: Car
    })
        .then(function (employee) {
            res.status(200).json(employee);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

function create(req, res) {
    Employee.create(req.body)
      .then(function (newEmployee) {
        res.status(200).json(newEmployee);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }

  function update(req, res) {
    Employee.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedEmployee) {
      res.status(200).json(updatedEmployee);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  function destroy(req, res) {
    Employee.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedEmployee) {
      res.status(200).json(deletedEmployee);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

module.exports = { index, show, create, update, destroy }