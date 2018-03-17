var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var listData;



/* Chargement static du JS */
app.use(express.static("public"));

/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))


/* S'il n'y a pas de todolist dans la session,
on en crée une vide sous forme d'array avant la suite */
.use(function(req, res, next){
    if (typeof(listData) == 'undefined') {
        listData = [];
    }
    next();
})

/* On affiche la todolist et le formulaire */
.get('/todo', function(req, res) { 
    res.render('todo.ejs', {todolist: listData});
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/todo');
});

/* SOCKETS */
io.sockets.on('connection', (socket) => {
    console.log("Un client vient de se connecter");
    socket.emit('todolist', listData); //envois de la liste au client

    socket.on('add', (todo) => {
        if (todo != '') {
            listData.push(todo);
            io.emit('todolist', listData);
        }
    });

    socket.on('delete', (id) => {
        if (req.params.id != '') {
            listData.splice(req.params.id, 1);
            io.emit('todolist', listData);
        }
    });
});

server.listen(8080);