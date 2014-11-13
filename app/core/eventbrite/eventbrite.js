var config = require('config');
var request = require('request').defaults({jar: true});
request.debug = true;
var loginUrl = 'https://www.eventbrite.com/login/';

var requestCallback = function (cb) {
  return function (err, res, body) {
    if (err || res.statusCode !== 200) {
      return cb(err || new Error('Request failed'));
    } else {
      try {
        body = JSON.parse(body);
        cb(null, body);
      } catch (e) {
        cb(null, body);
      }
    }
  }
};
var login = function (cb) {
  request.post({
      url: loginUrl,
      followAllRedirects: true,
      form: {
        email: config.eb.email,
        password: config.eb.password
      }
    },
    requestCallback(cb));
};

exports.checkin = function (ticket, cb) {
  login(function (err) {
    if (err) {
      return cb(err);
    }
    ticket = ticket || {};
    ticket._ = (new Date()).getTime();
    request({
        url: 'https://www.eventbrite.com/checkin_update',
        qs: ticket
      },
      requestCallback(function (err, body) {
        if (err) {
          return cb(err);
        }
        if (body && body.length) {
          var start = body.lastIndexOf('{');
          var end = body.indexOf('}', start) + 1;
          body = body.slice(start, end).split('\n').join('');
          try {
            body = JSON.parse(body);
            return cb(null, body);
          } catch (e) {
            return cb();
          }
        } else {
          return cb();
        }
      }))
  });
};
