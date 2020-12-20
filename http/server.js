let http = require('http')

http.createServer((req,res) => {
    console.log(req.rewHeaders)
    console.log(req.headers)

    res.setHeader('Content-Type','text/html')
    res.setHeader('By','jirengu')

    res.writeHead(302, {'Content-Type':'text/plain',location:'https://baidu.com'})
    res.end('ok')//创建一个文本，内容是ok 
}).listen(8080)