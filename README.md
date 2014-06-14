Gets and sets the value of a cookie on a request

E.g.

    var reqCookie = require('req-cookie')

    reqCookie.set(req, 'foo', 'bar')
    reqCookie.get(req, 'foo') //=> 'bar'
