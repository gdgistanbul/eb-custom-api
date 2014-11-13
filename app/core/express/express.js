var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = require('./router');

module.exports = function (app, cb) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
  app.use(bodyParser.json());
  router(app);
  cb();
};