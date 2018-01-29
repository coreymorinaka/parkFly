var express = require('express');
var router = express.Router();

var propertyController = require('../controllers/property-controller');

//http://localhost:3000/api/property
router.get('/', propertyController.index);
router.get('/:id', propertyController.show);
router.post('/', propertyController.create);
router.put('/:id', propertyController.update);
router.delete('/:id', propertyController.destroy);

module.exports = router;