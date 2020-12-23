https://www.open-open.com/solution/view/1321344823593
        NodeJs打造静态文件服务器



server-simple 的注意事项

fs.readFileSync(__dirname + '/static' + req.url)
    __dirname 当前的文件路径 此时就是代表  server-simple.js这个文件的路径，
    '/static' 添加一个文件路径
    req.url 表示一个动态的url路径， 可以自动寻找文件需要的文件

当时写的是  fs.readFileSync(__dirname + '/static/index.html')
    此时的效果只能显示出html文件里的内容，虽然css 和 js 也可以成功发送请求（200），但是因为上面把路径给写死了，
    导致css 和 js 不能展示出来

但是也要注意的是  在打开 localhost:8080 后 ，直接输入 /index.html 即可， 不用重复输入 /static 路径

