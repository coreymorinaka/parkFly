var sequelize = require('../config/db');
var { Company } = require('../models/company');
var { Employee } = require('../models/employee');

function index(req, res) {
  Company.findAll({
    include: Employee
  })
    .then(function (companies) {
      res.status(200).json(companies);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

function show(req, res) {
  Company.findById(req.params.id, {
      include: Employee
  })
      .then(function (company) {
          res.status(200).json(company);
      })
      .catch(function (error) {
          res.status(500).json(error);
      });
}

function create(req, res) {
  Company.create(req.body)
    .then(function (newCompany) {
      res.status(200).json(newCompany);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
}

function update(req, res) {
  Company.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (updatedCompany) {
    res.status(200).json(updatedCompany);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
}

function destroy(req, res) {
  Company.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (deletedCompany) {
    res.status(200).json(deletedCompany);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
}

module.exports = { index, show, create, update, destroy }