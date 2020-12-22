const  http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

var router = {
    '/getData': function(req,res) {
        var pathObj = url.parse(req.url,true)

        var page = pathObj.query.page
        var result
        if(page == 1) {
            result = [1,2,3]
        }
        if(page == 2) {
            result = [4,5,6]
        }
        res.write(JSON.stringify(result))
        res.end()   
    },
    '/hello': function(req,res) {
        res.end('hello world')
    }
}

var server = http.createServer(function(req,res) {
    var staticPath = path.join(__dirname,'www')
    var pathObj = url.parse(req.url,true)
    var filePath = path.join(staticPath,pathObj.pathname)
    try {
        /* 如果读取不到目录项，则将会返回 null。此函数返回的目录项不遵循操作系统的底层目录机制所提供的特定顺序。 遍历目录时添加或删除的目录项可能不会包含在遍历的结果中。*/
        var fileContent = fs.readFileSync(filePath,'binary')
        res.write(fileContent,'binary')
        res.end()
    }
    catch(e) {
        if(router[pathObj.pathname]) {
            router[pathObj.pathname](req, res)
        }
        else {
            res.writeHead(404,'not found')
            res.end('not found')
        }
    }

}).listen(8080)