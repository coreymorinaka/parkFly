var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var Sequelize = require('sequelize');
var multer = require('multer');


var sequelize = require('./config/db');
var seed = require('./routes/seed');

// POSTMARK 
var send = require("./routes/postmark");

var car = require('./routes/car');
var employee = require('./routes/employee');
var company = require('./routes/company');
var property = require('./routes/property');
var propertyManager = require('./routes/property-manager');

var app = express();

app.use(compression());

require('dotenv').load()

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images'))); 
app.use(express.static(path.join(__dirname, 'uploads')));


app.use('/api/v1/seed', seed);
app.use('/api/v1/car', car);
app.use('/api/v1/employee', employee);
app.use('/api/v1/company', company);
app.use('/api/v1/property', property);
app.use('/api/v1/propertymanager', propertyManager);
app.use('/api/v1/postmark', send);
// app.use('/api/v1/postmark', send);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports = app;
