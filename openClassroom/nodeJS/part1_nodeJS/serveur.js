
var http = require('http');  //require effectue un appel à une bibliothèque/module de Node.js : la bibli http permet de créer un serveur web
var url = require('url');
//La variable http représente un objet JavaScript 
// qui va nous permettre de lancer un serveur web. C'est justement ce qu'on fait avec :
var server = http.createServer(function(req, res) { // La fonction de callback est donc appelée à chaque fois qu'un visiteur se connecte à notre site. 
    //il nous suffit de "parser" la requête du visiteur comme ceci pour obtenir le nom de la page demandée
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
    else {
    	res.writeHead(404);
    	res.write('page not found!!');
    }
    res.end();
});
server.listen(8080);

/*
var http = require('http');
var url = require('url');
// http://localhost:8080/page?prenom=Robert&nom=Dupont
//Les paramètres sont contenus dans la chaîne ?prenom=Robert&nom=Dupont. 
// Pour récupérer cette chaîne, il suffit de faire appel à : ---- 1) url.parse(req.url).query ---- 
var querystring = require('querystring'); // 2) module Node.js qui découpe au préalable les différents paramètres de l'url
var server = http.createServer(function(req, res) {
	// 1 + 2 : tableau de paramètres
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
server.listen(8080);
*/