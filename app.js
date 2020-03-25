var express = require('express');
var templateEngine = require('nunjucks');

// Configuration d'Express
var app = module.exports = express();

const N_PORT = 3004;
const N_LISTEN = 'localhost';

app.set('view cache', false);


// Configuration du lien entre Express & Nunjucks
templateEngine.configure('views', {
    autoescape: true,
    express: app
});



// Routes dynamiques
//app.get('/', function (req, res) { res.render('start.html'); });


var index_html = require('./controllers/start');
app.get('/', index_html.index_html);

//var index = require('./controllers/start');
//app.get('/items', index.show_items);




// Routes statiques
app.use('/css/bootstrap.min.css', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use('/css/bootstrap.min.css.map', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css.map'));
app.use('/css/bootstrap-themes/', express.static('node_modules/bootstrap-themes/dist/'));
app.use('/css/common.css', express.static('views/css/common.css'));
app.use('/css/navbar.css', express.static('views/css/navbar.css'));
app.use('/js/bootstrap.min.js', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js'));
app.use('/js/bootstrap.min.js.map', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js.map'));
app.use('/js/jquery.slim.js', express.static('node_modules/jquery/dist/jquery.slim.js'));
app.use('/js/popper.min.js', express.static('node_modules/popper.js/dist/popper.min.js'));

app.use('/image/', express.static('views/images/'));
app.use('/js/', express.static('views/js/'));




// Démarrage du serveur
app.listen(N_PORT);
console.log('Application Started on http://' + N_LISTEN + ':' + N_PORT);

