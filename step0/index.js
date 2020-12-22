var http  = require('http')

var server = http.createServer(function(req,res) {

    //在 newWork 上有一个 favicon.ico ，它也会发送一个请求，加上localhost，所以下面虽然有一个console，但是会输出两个hello world
    console.log('hello world')
    // 当Content-Type 的值设置为text/html和text/plain时,前者会让浏览器把接收到的实体内容以HTML格式解析,后者会让浏览器以普通文本解析.
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.write('<h1>饥人谷</h1>')
    res.end('hello world!!!')
}).listen(9000)




// var server = http.createServer(function(request,response) {

//     //页面刷新6秒
//     setTimeout(function() {

//        response.setHeader('Content-Type','text/html;charset=utf-8')
//        response.writeHead(404, 'Not Found')
//        response.write('<html><head><meta charset="bgk"></head>')
//        response.write('<body>')
//        response.write('<h1>你好</h1>')
//        response.write('</body>')
//        response.write('</html>')

//        response.end()
//     },6000)
// }).listen(8080)