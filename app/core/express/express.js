var express = require('express');
var morgan = require('morgan');
var router = require('./router');

module.exports = function (app, cb) {
  app.use(morgan('dev'));
  router(app);
  cb();
};