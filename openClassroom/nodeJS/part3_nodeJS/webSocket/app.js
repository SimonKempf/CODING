/* 
Avec les WebSocket, la communication est synchrone : un tuyau de communication reste ouvert entre client et serveur

Ne confondez pas WebSocket et AJAX !
AJAX permet effectivement au client et au serveur d'échanger des informations sans recharger la page. Mais en AJAX, c'est toujours le client qui demande et le serveur qui répond. Le serveur ne peut pas décider de lui-même d'envoyer des informations au client. Avec WebSocket, ça devient possible !



Quand on utilise socket.io, on doit toujours s'occuper de deux fichiers en même temps :

Le fichier serveur (ex : app.js) : c'est lui qui centralise et gère les connexions des différents clients connectés au site.

Le fichier client (ex : index.html) : c'est lui qui se connecte au serveur et qui affiche les résultats dans le navigateur.
*/

var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
	// Quand un client se connecte, on le note dans la console
    console.log('Un client est connecté !');

	//Quand vous faites un socket.emit() du côté du serveur, vous envoyez uniquement un message au client avec qui vous êtes en train de discuter
    // Quand un client se connecte, on lui envoie un message
    socket.emit('message', 'Vous êtes bien connecté !');
    // On signale aux autres clients qu'il y a un nouveau venu
    // socket.broadcast.emit('message', 'Un autre client vient de se connecter !');

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    socket.on('petit_nouveau', function(pseudo) {
        socket.pseudo = pseudo;
    });


	// Dès qu'on reçoit un "message" (clic sur le bouton), on le note dans la console
    socket.on('message', function (message) {
        // On récupère le pseudo de celui qui a cliqué dans les variables de session
        console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
    }); 



});



server.listen(8080);