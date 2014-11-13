var config = require('config');
var _ = require('underscore');
var eventbrite = require('../core/eventbrite/');
exports.checkin = function (req, res, next) {
  var ticket = _.extend({
      eid: config.eb.eid,
      quantity: 1
    },
    req.body);
  eventbrite.checkin(ticket,
    function (err, body) {
      res.json({
        err: err,
        body: body
      });
    })
};