var express = require('express');
var router = express.Router();

var propertyManagerController = require('../controllers/property-manager-controller');

//http://localhost:3000/api/propertymanager
router.get('/', propertyManagerController.index);
router.get('/:id', propertyManagerController.show);
router.post('/', propertyManagerController.create);
router.put('/:id', propertyManagerController.update);
router.delete('/:id', propertyManagerController.destroy);

module.exports = router;