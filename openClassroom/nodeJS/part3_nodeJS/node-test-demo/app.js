var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var tasks = [];

app.use(express.static('public'))

    .get('/', function (req, res) {
        res.sendfile(__dirname + '/views/index.html');
    });

io.sockets.on('connection', function (socket) {

    // load current tasks
    socket.emit('load-old-tasks', tasks);

    // remove task
    socket.on('remove-task', function (index) {
        tasks.forEach(function (data, position) {
            if (data.index === index) {
                tasks.splice(position, 1);
            }
        });

        socket.broadcast.emit('remove-task', index);
    });

    // add task
    socket.on('add-task', function (data) {
        tasks.push(data);
        socket.broadcast.emit('add-task', data);
    });
});

server.listen(8080);