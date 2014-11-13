exports.notFound = function (req, res, next) {
  res.json({err: -1, msg: 'Not Found'});
};