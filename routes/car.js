var express = require('express');
var router = express.Router();

var carController = require('../controllers/car-controller');

//http://localhost:3000/api/car
router.get('/', carController.index);
router.get('/:id', carController.show);
router.post('/', carController.create);
router.put('/:id', carController.update);
router.delete('/:id', carController.destroy);

module.exports = router;