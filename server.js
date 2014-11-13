var config = require('config');
var app = require('express')();
var expressUtil = require('./app/core/express/');

expressUtil(app, function () {
  app.listen(config.port, function () {
    console.log('server is ready at port:' + config.port);
  })
});