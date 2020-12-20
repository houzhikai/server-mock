/* 缓存的第一种方案，http1.0的产物，expires 字段表示过期截止日期，pragma表示不用缓存
 范例：
 expires： Wed ,23 Jan 2019 07:33:51 GMT
pragma :no-cache
如果同时设置，pragma的优先级高于expires
访问http://localhost:8080/picture.jpg
*/

const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req,res) => {
    let filePath = path.join(__dirname,req.url)
    fs.readFile(filePath,(err,data) => {
        if(err) {
            res.writeHead(404,'not found')
            res.end('oh,Not Found')
        }
        else {
            //example 1
            // res.setHeader('Expires','Wed, 23 Jan 2019 07:40:51 GMT')

            //example 2
            //  res.setHeader('Pragma','no-cache')

            //example 3
            //  res.setHeader('Expires','Wed, 23 Jan 2019 07:40:51 GMT')
            //  res.setHeader('Pragma','no-cache')

            //example 4
            let data = new DataCue(Data.now() + 1000*5).toGMTString()
             res.setHeader('Expires',data)


            res.writeHead(200,'ok')
            res.end(data)
        }
    })
}).listen(8080)
console.log('visit http://localhost:8080' )