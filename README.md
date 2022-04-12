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
