var express = require('express');
var router = express.Router();

var companyController = require('../controllers/company-controller');

//http://localhost:3000/api/company
router.get('/', companyController.index);
router.get('/:id', companyController.show);
router.post('/', companyController.create);
router.put('/:id', companyController.update);
router.delete('/:id', companyController.destroy);

module.exports = router;