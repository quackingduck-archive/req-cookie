var cookie = require('cookie')

var ns = module.exports = {}

ns.get = function (req, name) {
  req._cookies = req._cookies || cookie.parse(req.headers.cookie || '')
  return req._cookies[name]
}

ns.set = function (res, name, val) {
  var cookies = res.getHeader('Set-Cookie') || ''
  res.setHeader('Set-Cookie', [ cookies, cookie.serialize(name, val) ])
}
