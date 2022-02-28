var arreglo = [1,2,3,4,5,6,7,8,9,12,13,14,12,11,5,6,3,4,2,7];
function promedio(){
    var i = 0, sum = 0, tama = arreglo.length;
    while (i < tama) {
        sum = sum + arreglo[i++];
}
return sum / tama;
}

const fs = require('fs');
let texto = "Este es el texto que quiero que salga en el archivo de texto creado por la página web.";
fs.writeFileSync("Lab8.txt", texto );
const http = require('http');
const server = http.createServer( (req, res) => {
    console.log("1. Promedio de arreglo= "+promedio());
    console.log("2. Archivo de texto de nombre Lab8.txt (Texto)= "+fs.readFileSync("Lab8.txt", "utf8"));
    console.log("3. Orden del arreglo de menor a mayor: "+arreglo.sort(function (a, b){
        return a - b;
    }))    
    console.log("--------------------------------------------------------------------------------");   
    res.setHeader('Content-Type','text/html');
    res.write('<!DOCTYPE html> <html><head> <style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Laboratorio 4: Fundamentos de JavaScript</h1> </header> </head><body> <p align="center">Las respuestas se encuentran en consola</p> </body></html>');
    res.end();
});
server.listen(4000);
