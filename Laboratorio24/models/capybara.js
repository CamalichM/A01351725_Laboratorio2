const db = require('../util/database');

module.exports = class Capybara {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }

    delete(id) {
        return db.execute('DELETE FROM capybaras WHERE id=?', [id]);
    }
    change(id){
        return db.execute('INSERT INTO capybaras (id, nombre, descripcion, imagen) VALUES (?, ?, ?, ?)', 
        [id, this.nombre, this.descripcion, this.imagen]);
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO capybaras (nombre, descripcion, imagen) VALUES (?, ?, ?)', 
            [this.nombre, this.descripcion, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM capybaras');
    }

    static fetchOne(capybara_id) {
        return db.execute('SELECT * FROM capybaras WHERE id=?', [capybara_id]);
    }

    static fetchTwo(capybara_nombre) {
        return db.execute('SELECT * FROM capybaras WHERE nombre=?', [capybara_nombre]);
    }

    static fetch(valor1) {
        let arr = valor1.split(' ');
        console.log("Mensajito");
        console.log(arr[0]);
        console.log(arr[1]);
        if(arr[1]!=undefined){
            return db.execute('SELECT * FROM capybaras c WHERE nombre LIKE ? AND descripcion LIKE ? ', ['%'+arr[0]+'%','%'+arr[1]+'%']);
        }
        else{
            return db.execute('SELECT * FROM capybaras c WHERE nombre LIKE ? OR descripcion LIKE ? ', ['%'+arr[0]+'%','%'+arr[0]+'%']); 
        }
        
    }

}