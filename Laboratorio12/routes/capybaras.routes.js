const express = require('express');
const path = require('path');
const router = express.Router();
var capybaras = [
    
];
const fs = require('fs');
const readline = require('readline');
function leerLinea (archivo,array){
    const readInterface = readline.createInterface({
        input: fs.createReadStream(archivo),
        output: process.stdout,
        console: false
    });

    readInterface.on('line', function(line) {
        array.push({nombre: line})
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
    response.sendFile(path.join(__dirname, '..', 'views', 'menu.html'));
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    capybaras.push({nombre: request.body.nombre});
    add('archives/capybaras.txt', request.body.nombre);
    response.redirect('/capybaras');
});
router.get('/borrar', (request, response, next) => {
    console.log('GET /capybaras/borrar');
    response.render('borrar'); 
});

router.post('/borrar', (request, response, next) => {
    console.log('POST /capybaras/borrar');
    var borrado =[    
    {nombre: "Capybara base"}];
    capybaras=borrado;
    fs.writeFileSync('archives/capybaras.txt',"Capybara base\n");
    console.log("Archivo borrado satisfactoriamente.");
    response.redirect('/capybaras');
});

router.get('/person', (request, response, next) => {
    console.log('GET /capybaras/person');
    response.render('person'); 
});

router.post('/person', (request, response, next) => {
    capybaras=[];
    console.log('POST /capybaras/person');
    console.log(request.body);
    capybaras.push({nombre: request.body.nombre});
    fs.writeFileSync('archives/capybaras.txt',request.body.nombre+"\n");
    console.log("Archivo borrado satisfactoriamente.");
    response.redirect('/capybaras');
});

router.get('/original', (request, response, next) => {
    console.log('GET /capybaras/original');
    response.render('original'); 
});

router.post('/original', (request, response, next) => {
    capybaras = [
        {nombre: "Pedro"}, 
        {nombre: "Pancho"}, 
        {nombre: "Luis"}, 
        {nombre: "Enrique"}
    ];
    console.log('POST /capybaras/original');
    fs.writeFileSync('archives/capybaras.txt',"Pedro\nPancho\nLuis\nEnrique\n");
    console.log("Capybaras originales regresados satisfactoriamente.");
    response.redirect('/capybaras');
});

router.use('/', (request, response, next) => {
    console.log('Ruta /capybaras');
    response.render('lista', {capybaras: capybaras}); 
});

module.exports = router;