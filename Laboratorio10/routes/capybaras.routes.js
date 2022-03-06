const express = require('express');

const router = express.Router();
var capybaras = [];
const fs = require('fs');
const readline = require('readline');

function leerLinea (archivo,array){
    const readInterface = readline.createInterface({
        input: fs.createReadStream(archivo),
        output: process.stdout,
        console: false
    });

    readInterface.on('line', function(line) {
        array.push(line)
    });
}
leerLinea('archives/capybaras.txt',capybaras);
function add(archivo,dato){
    fs.appendFile(archivo, dato + "\n" , (err) => {
        if (err) throw err;
        console.log("Dato agregado correctamente.");
     });
}


router.get('/nuevo', (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    let respuesta = ''
    respuesta = respuesta+('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 11: Express</h1> </header> </head><body>');
    respuesta = respuesta+('<h1 id="principal">Este sitio es de capybaras</h1>');
    respuesta = respuesta+('<h2>Aquí nacen los capybaras:</h2>');
    respuesta = respuesta+('<form action="nuevo" method="POST">');
    respuesta = respuesta+('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta+('<input type="text" id="nombre" name="nombre"');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<input type="submit" value="Enviar">');
    respuesta = respuesta+('</form>');
    respuesta = respuesta+('<form action="original" method="GET">');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<input type="submit" value="Regresar a los capybaras originales">');
    respuesta = respuesta+('</form>');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<a href="/">Regresar a la lista de capybaras</a>');
    respuesta = respuesta+('</body>');
    response.send(respuesta); 
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    capybaras.push(request.body.nombre);
    add('archives/capybaras.txt', request.body.nombre);
    response.redirect('/capybaras');
});

router.get('/borrar', (request, response, next) => {
    console.log('GET /capybaras/borrar');
    let respuesta = ''
    respuesta = respuesta+('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 11: Express</h1> </header> </head><body>');
    respuesta = respuesta+('<h1 id="principal">Este sitio es de capybaras, pero con un clic los limpiarás.</h1>');
    respuesta = respuesta+('<h2>¿Seguro que quieres borrar la lista?</h2>');
    respuesta = respuesta+('<form action="borrar" method="POST">');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<input type="submit" value="Borrar preterminadamente">');
    respuesta = respuesta+('</form>');
    respuesta = respuesta+('<form action="person" method="GET">');
    respuesta = respuesta+('<input type="submit" value="Borrar con nombre personalizado">');
    respuesta = respuesta+('</form>');
    respuesta = respuesta+('<a href="/">No borrar y regresar a la lista de capybaras.</a>');
    respuesta = respuesta+('</body>');
    response.send(respuesta); 
});
router.post('/borrar', (request, response, next) => {
    console.log('POST /capybaras/borrar');
    var borrado = ["Capybara base"];
    capybaras=borrado;
    fs.writeFileSync('archives/capybaras.txt',"Capybara base\n");
    console.log("Archivo borrado satisfactoriamente.");
    response.redirect('/capybaras');
});
router.get('/person', (request, response, next) => {
    console.log('GET /capybaras/person');
    let respuesta = ''
    respuesta = respuesta+('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 11: Express</h1> </header> </head><body>');
    respuesta = respuesta+('<h1 id="principal">Este sitio es de capybaras</h1>');
    respuesta = respuesta+('<h2>Aquí se borran los capybaras pero nace un nuevo ciclo:</h2>');
    respuesta = respuesta+('<form action="person" method="POST">');
    respuesta = respuesta+('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta+('<input type="text" id="nombre" name="nombre"');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<input type="submit" value="Enviar">');
    respuesta = respuesta+('</form>');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<a href="/">Cancelar y regresar a la lista de capybaras</a>');
    respuesta = respuesta+('</body>');
    response.send(respuesta); 
});
router.post('/person', (request, response, next) => {
    var borrado = [];
    capybaras=borrado;
    console.log('POST /capybaras/person');
    console.log(request.body);
    capybaras.push(request.body.nombre);
    fs.writeFileSync('archives/capybaras.txt',capybaras[0]+"\n");
    console.log("Archivo borrado satisfactoriamente.");
    response.redirect('/capybaras');
});
router.get('/original', (request, response, next) => {
    console.log('GET /capybaras/original');
    let respuesta = ''
    respuesta = respuesta+('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 11: Express</h1> </header> </head><body>');
    respuesta = respuesta+('<h1 id="principal">Este sitio es de capybaras</h1>');
    respuesta = respuesta+('<h2>¿Deseas regresar a la lista de capybaras originales?</h2>');
    respuesta = respuesta+('<form action="original" method="POST">');
    respuesta = respuesta+('<input type="submit" value="Si">');
    respuesta = respuesta+('</form>');
    respuesta = respuesta+('<br><br>');
    respuesta = respuesta+('<a href="/">No, regresar a la lista actual de capybaras</a>');
    respuesta = respuesta+('</body>');
    response.send(respuesta); 
});
router.post('/original', (request, response, next) => {
    capybaras=["Pedro","Pancho","Luis","Enrique"];
    console.log('POST /capybaras/original');
    fs.writeFileSync('archives/capybaras.txt',capybaras[0]+"\n"+capybaras[1]+"\n"+capybaras[2]+"\n"+capybaras[3]+"\n");
    console.log("Capybaras originales regresados satisfactoriamente.");
    response.redirect('/capybaras');
});

router.use('/', (request, response, next) => {
    console.log('Ruta /capybaras');
    let respuesta = '';
    respuesta = respuesta + ('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 11: Express</h1> </header> </head><body>');
    respuesta = respuesta + ('<h1 id="principal">Este sitio es de capybaras</h1>');
    respuesta = respuesta + ('<p>Tenemos los siguientes capybaras:</p>');
    respuesta = respuesta +('<ul>');
    for (let i in capybaras) {
        respuesta = respuesta+('<li>' + capybaras[i] + '</li>');
    }
    respuesta = respuesta +('</ul>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<ul>');
    respuesta = respuesta +('<li><a href="/capybaras/nuevo">Agregar un nuevo capybara</a></li>');
    respuesta = respuesta +('<li><a href="/capybaras/borrar">Borrar capybaras agregados</a></li>');
    respuesta = respuesta +('</ul>');
    respuesta = respuesta +('</body>');
    response.send(respuesta); 
});
module.exports = router;