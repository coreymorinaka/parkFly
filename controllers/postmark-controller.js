var postmark = require("postmark");
var OpenalprApi = require('openalpr_api');
var base64Img = require('base64-img');
var multer = require('multer'); // ADD FROM SAMPLE

//POSTMARK
var client = new postmark.Client("APIKEY");



function emailReport(req, res) {
  var email = req.body.email;
  var name = req.body.firstName + " " + req.body.lastName;
  console.log(req.body);
  console.log(email);
  // var teacher = req.body.teacherName
  // var dt = new Date();
  // var utcDate = dt.toUTCString();

  client.sendEmail({
    "From": "emailaddress", 
    "To": email, 
    "Cc": "emailaddress",
    "Subject": "Welcome to parkFly!", 
    "TextBody": "The following message was submitted on: ",
    "HtmlBody": "Welcome to parkFly " + name + "! Your account has been created, please feel free to add a car to your account.",

  }, function(error, result) {
      if(error) {
        console.log("Unable to send via postmark: " + error.message);
        return;
      } 
  });
  
  client.sendEmail();
  // res.json({message: "Message sent"})
  res.json(req.body);

}

function emailMove(req, res) {
  var email = req.body.email
  var car = req.body.cars[0].make + " " + req.body.cars[0].model;
  var license = req.body.cars[0].licensePlate;
  console.log(email);
  // var teacher = req.body.teacherName
  // var dt = new Date();
  // var utcDate = dt.toUTCString();

  client.sendEmail({
    "From": "emailaddress", 
    "To": email, 
    "Cc": "emailaddress",
    "Subject": "parkFly Notification.", 
    "TextBody": "The following message was submitted on: ",
    "HtmlBody": "Please move your " + car + " with license plate: " + license + ".",

  }, function(error, result) {
      if(error) {
        console.log("Unable to send via postmark: " + error.message);
        return;
      } 
  });
  
  client.sendEmail();
  res.json({message: "Message sent"})

}

function emailTow(req, res) {
  var email = req.body.email
  var car = req.body.cars[0].make + " " + req.body.cars[0].model;
  var license = req.body.cars[0].licensePlate;
  console.log(email);
  // var teacher = req.body.teacherName
  // var dt = new Date();
  // var utcDate = dt.toUTCString();

  client.sendEmail({
    "From": "emailaddress", 
    "To": email, 
    "Cc": "emailaddress",
    "Subject": "parkFly TOW Notification.", 
    "TextBody": "The following message was submitted on: ",
    "HtmlBody": "Please move your " + car + " with license plate " + license + " or it will be towed. You may be in the wrong spot or in a tow zone.",

  }, function(error, result) {
      if(error) {
        console.log("Unable to send via postmark: " + error.message);
        return;
      } 
  });
  
  client.sendEmail();
  res.json({message: "Message sent"})

}

function emailMaintenance(req, res) {
  var email = req.body.email
  var car = req.body.cars[0].make + " " + req.body.cars[0].model;
  var license = req.body.cars[0].licensePlate;
  console.log(email);
  // var teacher = req.body.teacherName
  // var dt = new Date();
  // var utcDate = dt.toUTCString();

  client.sendEmail({
    "From": "emailaddress", 
    "To": email, 
    "Cc": "emailaddress",
    "Subject": "parkFly Notification.", 
    "TextBody": "The following message was submitted on: ",
    "HtmlBody": "There is maintenance occuring near the location of your " + car + ". Please relocate to the designated area.",

  }, function(error, result) {
      if(error) {
        console.log("Unable to send via postmark: " + error.message);
        return;
      } 
  });
  
  client.sendEmail();
  res.json({message: "Message sent"})

}

//OCR

  //multers disk storage settings
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
  });
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////                  file upload              ///////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  var upload = multer({ storage: storage }).single('file');
  
  function checkPlate(req, res) {
    console.log(req.query.phone);
  
    upload(req, res, function (err) {
      if (err) {
        console.log("ERROR 1: ", err);
        res.json({ error_code: 1, err_desc: err });
        return;
      } else {
        var api = new OpenalprApi.DefaultApi()
  
  
        base64Img.base64('./uploads/' + req.file.filename, function (err, imgData) {
          var newData = imgData.substr(22)
  
  
          var callback = function (error, data, response) {
            if (error) {
              console.error(error);
            } else {
              console.log('API called successfully. Returned data: ' + data);
              data.new_filename = req.file.filename;
              data.phonenumber = req.query.phone;
  
              res.json(data)
            }
          };
  
          var secretKey = process.env.SECRET_KEY;
          var country = "us";
          var opts = {
            'recognizeVehicle': 0, // {Integer} If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request 
            'state': "CA", // {String} Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns. 
            'returnImage': 1, // {Integer} If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response 
            'topn': 1 // {Integer} The number of results you would like to be returned for plate  candidates and vehicle classifications 
          };
  
          api.recognizeBytes(newData, secretKey, country, opts, callback);
  
        })
  
      }
    })
  
  }

module.exports = { emailReport, emailMove, emailTow, emailMaintenance, checkPlate }