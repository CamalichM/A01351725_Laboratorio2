const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_capybaras = require('./routes/capybaras.routes');
const rutas_users = require('./routes/user.routes');
const path = require('path');
const csrf = require('csurf');
const csrfProtection = csrf();
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({extended: false}));


const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().getTime() + '-' + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(cookieParser());
app.use(session({
    secret: 'tesdrcfvgybhunjimkoiouhygturdyesrydctvybunjiouyt68d43a577yb7vc6543s475r6tvy', 
    resave: false,
    saveUninitialized: false,
}));

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/capybaras', rutas_capybaras);
app.use('/users', rutas_users);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.redirect('/users');
});

app.use((request, response) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esta página no existe. Vuelve a intentar."); //Manda la respuesta
});

app.listen(3000);