var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')


function staticRoot(staticPath, req, res) {
    console.log(staticPath)

    console.log(req.url)
    var pathObj = url.parse(req.url,true)
    console.log(pathObj)


    if(pathObj.pathname === '/') {
        pathObj.pathname += 'index.html'
    }


    var filePath = path.join(staticPath, pathObj.pathname)

    // var fileContent = fs.readFileSync(filePath, 'binary')
    // res.write(fileContent, 'binary')
    // res.end()


    fs.readFile(filePath, 'binary', function(err,fileContent) {
        if(err) {
            console.log('404')
            res.writeHead(404, 'Not Found')
            res.end('<h1>404 Not Found</h1>')
        }
        else {
            console.log('ok')
            res.writeHead(200, 'ok')
            res.write(fileContent, 'binary')
            res.end()
        }
    })



}

var server = http.createServer(function(req, res) {
    staticRoot(path.join(__dirname, 'static'), req, res)
}).listen(8080)