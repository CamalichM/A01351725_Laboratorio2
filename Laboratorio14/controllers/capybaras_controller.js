const path = require('path');
var Capybara = require('../models/capybara');
const fs = require('fs');
function add(archivo,dato){
    fs.appendFile(archivo, dato + "\n" , (err) => {
        if (err) throw err;
        console.log("Dato agregado correctamente.");
     });
}

exports.get_nuevo = (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    response.sendFile(path.join(__dirname, '..', 'views', 'menu.html'));
};

exports.post_nuevo = (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    const capybara = new Capybara(request.body.nombre);
    capybara.save();
    add('archives/capybaras.txt', request.body.nombre);
    request.session.info = capybara.nombre + ' fue registrado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_capybara='+capybara.nombre+'; HttpOnly');
    response.redirect('/capybaras');
};

exports.get_borrar = (request, response, next) => {
    console.log('GET /capybaras/borrar');
    response.render('borrar'); 
};

exports.post_borrar = (request, response, next) => {
    console.log('POST /capybaras/borrar');
    var borrado ="Capybara base";
    const capybara = new Capybara(borrado);
    response.setHeader('Set-Cookie', 'borro_capybara='+capybara.ultimo()+'; HttpOnly');
    capybara.borrado();
    fs.writeFileSync('archives/capybaras.txt',"Capybara base\n");
    console.log("Archivo borrado satisfactoriamente.");
    response.redirect('/capybaras');
};

exports.get_person = (request, response, next) => {
    console.log('GET /capybaras/person');
    response.render('person'); 
};

exports.post_person=(request, response, next) => {
    console.log('POST /capybaras/person');
    console.log(request.body);
    const capybara = new Capybara(request.body.nombre);
    response.setHeader('Set-Cookie', 'borro_capybara='+capybara.ultimo()+'; HttpOnly');
    capybara.borrado();
    fs.writeFileSync('archives/capybaras.txt',request.body.nombre+"\n");
    console.log("Archivo borrado satisfactoriamente.");
    request.session.info = capybara.nombre + ' fue registrado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_capybara='+capybara.nombre+'; HttpOnly');
    response.redirect('/capybaras');
};
exports.get_original=(request, response, next) => {
    console.log('GET /capybaras/original');
    response.render('original'); 
};

exports.post_original=(request, response, next) => {
    const capybara = new Capybara("");
    response.setHeader('Set-Cookie', 'borro_capybara='+capybara.ultimo()+'; HttpOnly');
    capybara.original();
    console.log('POST /capybaras/original');
    fs.writeFileSync('archives/capybaras.txt',"Pedro\nPancho\nLuis\nEnrique\n");
    console.log("Capybaras originales regresados satisfactoriamente.");
    response.redirect('/capybaras');
};

exports.use_menu=(request, response, next) => {
    console.log('Ruta /capybaras');
    console.log(request.cookies);
    const info = request.session.info ? request.session.info : '';
    request.session.info = '';
    response.render('lista', {
        capybaras: Capybara.fetchAll(),
        ultimo_capybara: request.cookies.ultimo_capybara ? request.cookies.ultimo_capybara : '',
        borro_capybara: request.cookies.borro_capybara ? request.cookies.borro_capybara : 'Capybara base',
        info: info
    }); 
}