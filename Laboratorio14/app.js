const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_capybaras = require('./routes/capybaras.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'tesdrcfvgybhunjimkoiouhygturdyesrydctvybunjiouyt68d43a577yb7vc6543s475r6tvy', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use('/capybaras', rutas_capybaras);

app.use((request, response, next) => {
    console.log('Middleware!');
    response.redirect('/capybaras');
    //Le permite a la petición avanzar hacia el siguiente middleware
});
app.use((request, response) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esta página no existe. Vuelve a intentar."); //Manda la respuesta
});

app.listen(3000);
//¿Qué otros templating engines existen para node? Handlebars, eta, marko, mustache, jade, pug, nunjucks, remixml, squirrelly, etc.