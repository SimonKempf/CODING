var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})

server.listen(8080); // Démarre le serveur

//server.close(); // Arrête le serveur. Déclenche l'évènement close

/*
la doc de createServer() dit que la fonction de callback qu'on lui envoie en paramètre est automatiquement ajoutée à l'évènement "request" !

Donc ce code :

var server = http.createServer(function(req, res) { });

... peut être réécrit comme ceci de façon plus détaillée :

// Code équivalent au précédent
var server = http.createServer();
server.on('request', function(req, res) { });
*/

// emetre des évènements :

// incluez le module EventEmitter 
var EventEmitter = require('events').EventEmitter;
//et créez un objet basé sur EventEmitter.
var jeu = new EventEmitter();

// Celui qui veut écouter l'évènement doit faire:
jeu.on('gameover', function(message){
    console.log(message);
});
// génère un évènement "gameover" et envoie un message à celui qui réceptionnera l'évènement via un paramètre :
jeu.emit('gameover', 'Vous avez perdu !');



/*
Croyez-le ou non, le noyau de Node.js est tout petit. De base, Node.js ne sait en fait pas faire grand chose.

Pourtant, Node.js est très riche grâce à son extensibilité. Ces extensions de Node.js sont appelées modules.

Il existe des milliers de modules qui offrent des fonctionnalités variées : 
de la gestion des fichiers uploadés à la connexion aux bases de données MySQL ou à Redis, 
en passant par des frameworks, des systèmes de templates et la gestion de la communication 
temps réel avec le visiteur ! Il y a à peu près tout ce dont on peut rêver et de nouveaux modules 
apparaissent chaque jour.

Nous allons commencer par voir comment sont gérés les modules par Node.js et nous verrons que nous pouvons 
facilement en créer un nous aussi. Puis, nous découvrirons NPM (Node Package Manager), 
l'outil indispensable qui vous permet de télécharger facilement tous les modules de la 
communauté Node.js ! Enfin, je vous montrerai comment accéder à la gloire éternelle en publiant votre module sur NPM.
*/



