let http = require('http')
let server = http.createServer(function(req,res) {
    console.log(req.headers)
    console.log(req.url)
    res.statusCode = 500
    res.setHeader('Content-Type','text/plain; charset = utf-8')
    res.end('<h1>hello world<h1>')
})
sever.listen(3000)