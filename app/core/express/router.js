var express = require('express');
var requestUtil = require('./request');

module.exports = function (app) {
  var router = express.Router();
  router.route('/checkin')
    .post(requestUtil.controllers.eventbrite.checkin);
  router.route('*')
    .all(requestUtil.controllers.site.notFound);
  app.use(router);
};