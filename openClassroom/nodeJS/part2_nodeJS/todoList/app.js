var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions

//Nous avons appris à récupérer des paramètres depuis l'URL mais pas depuis les formulaires. 
// En fait, vous avez ici besoin du middleware body-parser.
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();


/* On utilise les sessions */

//use is a method to configure the middleware used by the routes of the Express HTTP server object. 
//The method is defined as part of Connect that Express is based upon.

app.use(session({secret: 'todotopsecret'}))
/* Le paramètre secret envoyé au module de session est obligatoire : il permet de sécuriser les cookies de session. 
Envoyez la valeur de votre choix. Notez que vous pouvez envoyer d'autres options, 
comme la durée de vie du cookie de session (par défaut, la session durera tant que le navigateur restera ouvert).
 */

/* S'il n'y a pas de todolist dans la session,
on en crée une vide sous forme d'array avant la suite */
.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
})


// (On parle de callback pour une fonction qui est automatiquement appelée lorsqu'un évènement survient.)
// La fonction de callback peut être associée à autant d'évènements qu'on le souhaite.
// On peut associer autant de fonctions de callback qu'on le souhaite à un même évènement.
/* Gestion des routes en-dessous */

/* On affiche la todolist et le formulaire */
.get('/todo', function(req, res) { 
    res.render('todo.ejs', {todolist: req.session.todolist});
})

/* On ajoute un élément à la todolist */
.post('/todo/ajouter/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

/* Supprime un élément de la todolist */
.get('/todo/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);