// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req,res){
//     // fs.readFile('./index.html',function(error,data){//若根目录有index.html，访问地址，将显示index.html
//     //     res.writeHead(200,{'Content-Type':'text/html'});
//     //     res.end(data,'utf-8');
//     // });
// }).listen(3000, "10.200.19.125");//创建http服务
// console.log('Server running at http://10.200.19.125:3000/');

// var io = require('socket.io').listen(server);
// io.sockets.on('connection', (socket) => {
//     var timer = '';
//     console.log('链接成功');
//     socket.on('start', () => {//监听前端发送的start
//         // timer = setInterval(function () {//定时器每五秒发一次
//             socket.emit('login', {//触发emit,前端接收
//                 "Action": "DataRecv",
//                 "Data": {
//                 "Reporting_mode": {"T":"I","V":5},
//             }
//             });
//         // },5000)
//     });
//     socket.on('submit', data => {
//       console.log(data, 'data');
//       socket.emit('haha', {name: 10});
//     })
//     socket.on('disconnect', (result) => {
//       console.log(result);
//       io.emit('loadding', '离线');
//     })
// });


var app = require('http').createServer(),
    io = require('socket.io')(app);
app.listen(8080);
PORT=8080,
clientCount=0;
io.on('connection',function(socket){
    socket.on('online',function(data){
        clientCount++;
        io.emit('clientNum',clientCount);
        socket.username = data
        io.emit('online',data)
        console.log('user:'+socket.username+'connected!')
    })
    socket.on('msg',function(data){
        io.emit('broadcastMsg',data);
        console.log(JSON.stringify(data)+"发消息了")
    })

    socket.on('disconnect',function(){
        if(clientCount>0){
            clientCount--;
        }
        io.emit('clientNum',clientCount);
        socket.broadcast.emit('offline',socket.username);
        console.log(socket.username+'下线了~')
    })
})

console.log('listening at :' +PORT)
// 