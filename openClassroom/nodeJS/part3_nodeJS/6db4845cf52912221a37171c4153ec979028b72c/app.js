var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var ent = require('ent');
var fs = require('fs');

var todolist = [];

app.get("/", function(req,res){
	res.render('todo.ejs', {todolist: todolist});
}).use(function(req,res,next){
	res.redirect("/");
});

io.sockets.on('connection', function (socket) {

	socket.on('ajouter', function(newtodo){
		if(newtodo != ''){
			newtodo = ent.encode(newtodo);
			todolist.push(newtodo);
			socket.broadcast.emit('ajouter',newtodo);
		}
	});

	socket.on('modifier', function(update){
		if(update.id != '' && update.task != ''){
			updatetodo = ent.encode(update.task);
			todolist[update.id] = updatetodo;
			socket.broadcast.emit('modifier',{task:updatetodo, id:update.id});
		}
	});

	socket.on('supprimer', function(id){
		if(id != ''){
			todolist.splice(id, 1);
			socket.broadcast.emit('supprimer',id);
		}
	});
});

server.listen(8080);