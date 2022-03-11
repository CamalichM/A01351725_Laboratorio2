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
module.exports = class Capybara {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        capybaras.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return capybaras;
    }
    original(){
        capybaras = [
            {nombre: "Pedro"}, 
            {nombre: "Pancho"}, 
            {nombre: "Luis"}, 
            {nombre: "Enrique"}
        ];
    }
    borrado(){
        capybaras=[];
        capybaras.push(this);
    }
    ultimo(){
        return capybaras.pop().nombre;
    }

}
