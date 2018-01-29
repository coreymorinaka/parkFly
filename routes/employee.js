var express = require('express');
var router = express.Router();

var employeeController = require('../controllers/employee-controller');

//http://localhost:3000/api/employee
router.get('/', employeeController.index);
router.get('/:id', employeeController.show);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.destroy);

module.exports = router;