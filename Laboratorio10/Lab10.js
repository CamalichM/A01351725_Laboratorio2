console.log("hola desde nodeeeee");

//fs: filesystem
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde nodeeee');

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 
var capybaras = ["Pedro", "Poncho", "Pablo", "Patricio"];
const http = require('http');

const server = http.createServer( (request, response) => {
    
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 10: Rutas y formas</h1> </header> </head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('<p>Tenemos los siguientes capybaras:</p>');
        response.write('<ul>');
        for (let i in capybaras) {
            response.write('<li>' + capybaras[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<ul>');
        response.write('<li><a href="nuevo">Agregar un nuevo capybara</a></li>');
        response.write('<li><a href="borrar">Borrar capybaras agregados</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 10: Rutas y formas</h1> </header> </head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('<h2>Aquí nacen los capybaras:</h2>');
        response.write('<form action="nuevo" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Pedro">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de capybaras</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'POST') {  
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            capybaras.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 10: Rutas y formas</h1> </header> </head><body>');
            response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
            response.write('<p>Tenemos los siguientes capybaras:</p>');
            response.write('<ul>');
            for (let i in capybaras) {
                response.write('<li>' + capybaras[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<ul>');
            response.write('<li><a href="nuevo">Agregar un nuevo capybara</a></li>');
            response.write('<li><a href="borrar">Borrar capybaras agregados</a></li>');
            response.write('</ul>');
            response.write('</body>');
            return response.end();
        });
    } 
    else if (request.url === '/borrar' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 10: Rutas y formas</h1> </header> </head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras, pero con un clic los limpiarás.</h1>');
        response.write('<h2>¿Seguro que quieres borrar la lista?</h2>');
        response.write('<form action="borrar" method="POST">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Borrar">');
        response.write('</form>');
        response.write('<a href="/">No borrar y regresar a la lista de capybaras.</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/borrar' && request.method === 'POST') {  
        console.log("POST");
        request.on('data', (borrado) => {
            borrado = ["Capybara base"];
            console.log(borrado);
            capybaras=borrado;
        });
        return request.on('end', () => {
            borrado = ["Capybara base"];
            capybaras=borrado;
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 10: Rutas y formas</h1> </header> </head><body>');
            response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
            response.write('<p>Tenemos los siguientes capybaras:</p>');
            response.write('<ul>');
            for (let i in capybaras) {
                response.write('<li>' + capybaras[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<ul>');
            response.write('<li><a href="nuevo">Agregar un nuevo capybara</a></li>');
            response.write('<li><a href="borrar">Borrar capybaras agregados</a></li>');
            response.write('</ul>');
            response.write('</body>');
            filesystem.writeFileSync('archivodeborrado.txt', 'El borrado fue realizado exitosamente, ahora el arreglos capybares posee el contenido: '+ borrado);
            filesystem.writeFileSync('final.txt', 'Este programa fue realizado por Marco Antonio Camalich Pérez, de matrícula A01351725');
            return response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><style> header{text-align: center;padding: 3px;background-color: blue;color: white;} </style> <header> <img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" width="300" height="100" class = "logo"> <h1>Lab 10: Rutas y formas</h1> </header> </head><body>');
        response.write('<h1 align="center">Capybaras | Not found</h1>');
        response.write('<body>');
        response.write('<h2 id="principal">Este capybara no existe, amigo. :( </h2>');
        response.write('</body>');
        response.end();
    }


});
server.listen(3000);