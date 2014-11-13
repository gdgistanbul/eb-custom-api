module.exports = {
  status: 'default',
  port: process.env.PORT || 1337,
  eb: {
    email: process.env.EB_MAIL,
    password: process.env.EB_PASS,
    eid: process.env.EB_EVENT_ID
  }
};