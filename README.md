# Laboratorios de Marco Antonio Camalich Pérez
Marco Antonio Camalich Pérez

A01351725

a01351725@tec.mx

15 de febrero de 2022

Construcción de software y toma de decisiones

## Nota 
La carpeta "Node Modules" no ha sido subida a GitHub y aunque probablemente no sea requerida en los laboratorios, el enlace de descarga para poder ingresar la carpeta a los laboratorios es el siguiente: https://drive.google.com/drive/folders/1b6p8ZwM3FgPKFAKWy8pHoY2ivVE4Dhyh?usp=sharing
## ¿Qué otros templating engines existen para node? (LAB 12)
-Pug

-Haml.js

-hbs

-Eta

-Squirrelly

-marko

-Nunjucks

-Twing
#### Template Engines. (2017). Retrieved from Expressjs.com website: https://expressjs.com/en/resources/template-engines.html
## Beneficios y desventajas del Estilo MVC (Lab 13 y 14)
### Beneficios
-Independencia de funcionamiento.

-Facilita el mantenimiento.

-Facilita el control de la información del código gracias a la separación de sus componentes.

-Se maneja más orden y estética dentro de las convenciones.

-Permite un fácil escalamiento de la aplicación.
### Desventajas
-Se agrega complejidad al sistema.

-La cantidad de archivos a mantener aumenta considerablemente.

-La curva de aprendizaje es mayor.

-El patrón de diseño se complica y requiere mayor tiempo de análisis.

#### Capítulo II. Arquitectura del Software. (n.d.). Retrieved from: http://catarina.udlap.mx/u_dl_a/tales/documentos/lis/rivera_l_a/capitulo2.pdf
## ¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo? (Lab 17)
Porque recordemos que la existencia del modelo en el MVC es específica para el acceso, la inserción y la modificación de los datos. Ya que la base de datos es meramente de control de información, el llamarlo en la capa de modelo es la acción propia para poder mantener orden y el funcionamiento según las convenciones, puesto que el controlador funciona solamente para responder a las llamadas del usuario siendo mediador entre rutas y modelos, y las rutas solamente se redirige a los controladores, dando a entender que ninguna de las dos maneja manipulación de datos como para adentrarse en SQL.
#### Qué es MVC. (2014, January 2). Retrieved from Desarrolloweb.com website: https://desarrolloweb.com/articulos/que-es-mvc.html
## ¿Qué es SQL injection y cómo se puede prevenir? (Lab 17)
Ciberataque que consta en insertar código propio en una página con SQL para poder acceder a datos protegidos de las bases de datos en cuestión y poder secuestrar toda la información desprotegida, así como manipular los registros, consultas y eliminar datos al antojo del hacker.
#### ¿Qué es SQL Injection? (2017, October 12). Retrieved from OpenWebinars.net website: https://openwebinars.net/blog/que-es-sql-injection/
## ¿Qué otras formas de autentificación existen? (Lab 18)
-Identificador en línea que, por medio de la red de internet, detecta tu red analizando la condición de cliente o trabajador del usuario que trata de accesar.
-One Time Password generado por mensaje de texto.
-Timed Password que cambia cada determinada cantidad de segundos.
-Url por SMS.
-Mobile Connect que valida al usuario por la Tarjeta SIM.
#### admin. (2019, July 5). ¿Cuál es el mejor método de autenticación? Retrieved from El blog de Orange website: https://blog.orange.es/empresas/cual-es-el-mejor-metodo-de-autenticacion/
## ¿En qué consiste el control de acceso basado en roles? (Lab 19)
Aplicación de atributos de seguridad informática a procesos que permite controlar el acceso de un usuario a las funcionalidades de un sistema, basado en el rol o privilegio que posea con respecto al uso completo de la aplicación. Normalmente, define los de mayor acceso (usualmente llamados administradores) y otros cuyo acceso se ve limitado por el sistema mismo.
## Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. Realicen un análisis de las ventajas y desventajas de cada uno con respecto al control de acceso. (Lab 19)
### Beneficios
-Aumenta la seguridad de los sistemas.

-Permite un manejo empresarial efectivo, dinámico y adecuado para los trabajadores.

-Permite un fácil cambio de posición o puesto sin afectar el funcionamiento previo del sistema del usuario.

-Es sencillo asignar o revocar el rol en la página por bloques dependiendo del rol en la empresa que los usuarios manejan.
### Desventajas
-No es adecuado para pequeñas empresas pues genera costoso y dificultoso manejar roles y permisos.

-Mayor costo en tiempo de desarrollo, mantenimiento y dinero.

-Puede generar discordancia a largo plazo por la evolución del sistema de trabajo de la empresa o de los individuos encargados de la página.
#### Control de acceso basado en roles (descripción general) - Guía de administración del sistema: servicios de seguridad. (2011). Oracle.com. https://docs.oracle.com/cd/E24842_01/html/E23286/rbac-1.html#:~:text=El%20control%20de%20acceso%20basado,normalmente%20est%C3%A1n%20restringidas%20al%20superusuario.
## ¿Qué importancia tiene AJAX en el desarrollo de RIA's (Rich Internet Applications? (Lab 24)
Porque la recarga continua de páginas web que se realiza en las que no manejan AJAX provoca un tráfico alto entre cliente y servidor y las RIA planean manejar características de aplicaciones de escritorio en la web, pero sin la poca practicidad que maneja un HTML basado en carga de enlaces. AJAX, desde el principio, permite la carga de toda la aplicación y habilita el hecho de que se produzca comunicación con el servidor solamente cuando se necesitan datos externos como datos de una base de datos o de otros ficheros externos. Esto incluye cambios dinámicos en páginas web solo por métodos GET, realizar funciones y carga de datos sin necesidad de mandar POST, etc.
## ¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones de seguridad, del lado del cliente o del lado del servidor? (Lab 24)
Dado a que AJAX ejecuta JavaScript asíncrono con XML, la ejecución de funciones y la obtención de datos se ejecuta en el lado del cliente, por lo que las validaciones deben ser realizadas client-side. Las implicaciones de seguridad de AJAX requiere mantener los datos separados del código, ya que el acceso a información fuera del servidor puede darle código de ejecución a los hackers facilitando futuras inyecciones, saber lo que se ejecuta porque existen métodos como Firebug que pueden atacar autentificación y RBAC y tener cuidado con la codificación porque el dejar vulnerable la información a la hora de ejecutar procesos client-sided es una puerta abierta para robos y hackeos no deseados. 
## ¿Qué es JSON? (Lab 24)
La notación de objetos JavaScript es un formato ligero de intercambio de datos, fácil de estructurar y comprender, que serializa objetos, arreglos, números, cadenas, booleanos y nulos y sirve para la comunicación entre servicios web (web services) y los clientes que los consumen.
#### Getting Started - Developer guides | MDN. (2022, April 8). Mozilla.org. https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
#### Reduce la superficie de ataque en AJAX | Noticias - CSI -. (2012). Cert.org.mx. https://www.cert.org.mx/historico/noticias/index.html-noti=2967
