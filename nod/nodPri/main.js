// 1。回调函数
// 阻塞代码实例
// 相当于异步执行
// var fs = require('fs')
// var data = fs.readFileSync('note.txt')
// console.log(data.toString())
// console.log('执行完毕')

// 非阻塞代码实例     
// 相当于非异步执行
// var fs = require('fs')
// fs.readFile('note.txt', function(err,data){
//   if(err) return console.error(err)
//   console.log(data.toString())
// })
// console.log('执行代码结束')

// 阻塞是顺序执行，非阻塞是不需要按顺序的，所以处理回调函数的参数，我们写在回调函数内


// 2.事件循环
// 引入 events 模块
// var events = require('events')
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter()
// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功')
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received')
// }
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler)
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功')
// })
// // 触发 connection 事件 
// eventEmitter.emit('connection');
// console.log("程序执行完毕");


// 3.
// // Buffer与字符编码
// const buf = Buffer.from(['a', 'b']);
// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));
// // 输出 cnVub29i
// console.log(buf.toString('base64'));


// 4.
// 模块
// var Hello = require('./hello')
// var hello = new Hello()
// var a = hello.setName('world')
// var b = hello.sayHello()

// 5.
// 函数  函数可以作为另外一个函数的参数
// function say(word) {
//   console.log(word);
// }
// function execute(someFunction, value) {
//   someFunction(value);  // 相当于调用say()  value参数就是word参数
// }
// execute(say, "Hello");  // 调用execute() 第一个参数是say() 第二个参数是填进去的值"Hello"

// 6.全局对象
// __filename 表示当前正在执行的脚本的文件名。
// console.log(__filename)

// __dirname 表示当前执行脚本所在的目录。
// console.log(__dirname)

// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值。
// clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
// function printHello(){
  // console.log( "Hello, World!");
// }
// 两秒后执行以上函数
// var t = setTimeout(printHello, 2000);
// 清除定时器
// clearTimeout(t);

// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
// function printHello(){
//   console.log( "Hello, World!");
// }
// 两秒后执行以上函数
// var s = setInterval(printHello, 2000);
// clearInterval(s);

// console输出语句
// console.info("程序开始执行：");
// var counter = 10;
// console.log("计数: %d", counter);
// console.time("获取数据");
// 执行一些代码
// console.timeEnd('获取数据');
// console.info("程序执行完毕。")


// 7.
// GET/POST请求
// GET请求
// var http = require('http');
// var url = require('url');
// var util = require('util');
// // 创建一个http服务器
// http.createServer(function(req, res){
//   // writeHead:设置响应头，两个参数,第一个状态值,第二个表示对应的设置
//     res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"}); 
//     // parse:解析 url 参数，参数为true，query属性会生成一个对象，如果为false,query属性会是一个未解析，未解码的字符串，默认为false
//     var params = url.parse(req.url, true).query;
//     // res.write('<head><meta charset="utf-8"/></head>');   //具体实现为这行代码
//     // 向请求的客户端发送响应内容
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     // 如果服务器端没有数据返回到客户端 那么就可以用 res.end
//     // 但是 如果 服务器端有数据返回到客户端 这个时候必须用res.send ,不能用 res.end（会报错）
//     res.end();
// }).listen(3000);

// POST请求
// var http = require('http');
// var querystring = require('querystring');
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
// http.createServer(function (req, res) {
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.url) { // 输出提交的数据
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);


// 创建web服务器

var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse('/index.html').pathname;
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         // 响应文件内容
         response.write(data.toString());        
      }
      //  发送响应数据
      response.end();
   });   
}).listen(8888);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8888/');
