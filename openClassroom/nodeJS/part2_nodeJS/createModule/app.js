var monmodule = require('./monmodule');
//require()renvoie en fait un objet qui contient les fonctions que vous avez exportées dans votre module. Nous stockons 
//cet objet dans une variable du même nommonmodule(mais on aurait pu lui donner n'importe quel autre nom).

monmodule.direBonjour();
monmodule.direByeBye();

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));

/* ATTENTION :
Les modules installés globalement ne peuvent pas être inclus dans vos projets Node.js 
avec require()! Ils servent juste à fournir des commandes supplémentaires dans la console.
Si vous voulez les utiliser en JavaScript, vous devez donc aussi les installer normalement 
(sans le -g) en local.
*/