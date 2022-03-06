const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_capybaras = require('./routes/capybaras.routes');

app.use('/capybaras', rutas_capybaras);

app.use((request, response, next) => {
    response.redirect('/capybaras');
    next();
});
app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esta página no existe. Vuelve a intentar."); //Manda la respuesta
});

app.listen(3000);