var express = require('express');
var router = express.Router();

var postmarkController = require("../controllers/postmark-controller");

//http://localhost:3000/api/vi/postmark/
router.post('/send', postmarkController.emailReport);
router.post('/move', postmarkController.emailMove);
router.post('/tow', postmarkController.emailTow);
router.post('/maintenance', postmarkController.emailMaintenance);
router.post('/checkplate', postmarkController.checkPlate);

module.exports = router;