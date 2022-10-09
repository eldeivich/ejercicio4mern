# Ejercicio 4.1 del Curso de MERN de OpenBootcamp

## Peticiones al servidor de Mongo del ejercicio 4.1

> Importa el JSON a una colección llamada Contacts:

![alt Get Root Router](src/images/mongo1.png)

> Listar todos los contactos:

    db.Contacts.find()

![alt Listar todos los contactos](src/images/mongo2.png)

> Busca el primer contacto que sea de Alemania (Germany):

    db.Contacts.findOne({"location.country": "Germany"})

![alt Busca el primer contacto que sea de Alemania (Germany)](src/images/mongo3.png)

> Busca todos los contactos que tengan Blake como nombre (first)

    db.contacts.find({"name.first": "Blake})

![alt Busca todos los contactos que tengan Blake como nombre (first)](src/images/mongo4.png)

> Busca los primeros 5 contactos que tengan como género (gender) hombre (male)

    db.Contacts.find({"gender": "male"}).limit(5)

![alt Busca los primeros 5 contactos que tengan como género (gender) hombre (male)](src/images/mongo5.png)

> Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente

    db.Contacts.find().limit(4).sort({"name.first": -1})

![alt Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente](src/images/mongo6.png)

> Clona la colección de Contacts a CopiaContacts y luego bórrala

    db.Contacts.aggregate([{$out: "CopiaContacts"}])

![alt Clona la colección de Contacts a CopiaContacts y luego bórrala](src/images/mongo7.png)

    db.CopiaContacts.drop()

![alt borrar copia](src/images/mongo8.png)

> Renombra el campo de name por nombre

    db.Contacts.updateMany({}, {$rename: {name: "nombre"}})

![alt Renombra el campo de name por nombre](src/images/mongo9.png)

> Borra todos los contactos que tengan como estado (state) Florida
    
    > Listo los contactos de Florida antes de borrar:

![alt Lista contactos Florida antes de borrar](src/images/mongo10.png)

    db.Contacts.deleteMany({"location.state": "Florida"})

![alt Borra todos los contactos que tengan como estado (state) Florida](src/images/mongo11.png)

    >Listo los contacots de Florida después de borrar:

![alt Lista contactos Florida después de borrar](src/images/mongo12.png)

## Dependencias instaladas del ejercicio 3

### 1. Dependencias de producción

> Son dependencias instaladas tanto para el entorno de desarrollo como para el entorno de producción.

* #### mongoose en su versión ^6.6.5:

    > Librería que permite realizar todo tipo de consultas en una base de datos de Mongo DB.

* #### swagger-jsdoc en su versión ^6.2.5:
    
    > Genera documentación a partir de comentarios que se van creando en el código de la aplicación.

* #### swagger-ui-express en su versión ^4.5.0:

    > Genera una interfaz con la documentación del proyecto.

* #### tsoa en su versión ^4.1.3:

    > Para crear con decoradores una extructura clara para la aplicación.

### 2. Dependencias de desarrollo

> Son dependencias instaladas solamente para el entorno de desarrollo.

* #### ts-loader en su versión ^9.4.1:

    > Loader de TypeScript para WebPack.

* #### @types/swagger-jsdoc en su versión ^6.0.1:

    > Contiene las definiciones de swagger-jsdoc para TypeScript.

* #### @types/swagger-ui-express en su versión ^4.1.3:

    > Contiene las definiciones de swagger-ui-express para TypeScript.

## Dependencias instaladas del ejercicio 2

### 1. Dependencias de producción

> Son dependencias instaladas tanto para el entorno de desarrollo como para el entorno de producción.

* #### cors en su versión ^2.8.5:
    > cors - Intercambio de recursos de origen cruzado - Utiliza cabeceras HTTP adicionales para permitir acceder a recursos de un servidor de un dominio distinto del que pertenece.

* #### helmet en su versión ^6.0.0:
    > Es un módulo de Node que ayuda a proteger los encabezados HTTP.

### 2. Dependencias de desarrollo

> Son dependencias instaladas solamente para el entorno de desarrollo.

* #### @types/cors en su versión ^2.8.12:

    > Contiene las definiciones de cors para TypeScript.

## Dependencias instaladas del ejercicio 1

### 1. Dependencias de producción

> Son dependencias instaladas tanto para el entorno de desarrollo como para el entorno de producción.

* #### Express en su versión ^16.0.2:
    > Es un framework para el entorno de ejecución NodeJS que ayuda a configurar un entorno de desarrollo y realizar tareas de desarrollo y publicación web.

* #### Dotenv en su versión ^4.18.1:
    > Es una librería para tener un archivo de configuración que contiene todas las variables de entorno que se crean.

### 2. Dependencias de desarrollo

> Son dependencias instaladas solamente para el entorno de desarrollo.

* #### @types/express en su versión ^4.17.14:
    > Es un paquete para que TypeScript reconozca los tipos de Express.

* ### @types/jest en su versión ^29.0.3:
    > Contiene las definiciones de Jest para TypeScript.

* ### @types/node en su versión ^18.7.20:
    > Contiene las definiciones de node para TypeScript.

* ### @typescript-eslint/eslint-plugin en su versión ^5.38.0:
    > Un plugin que proporciona reglas recomendadas para TypeScript.

* ### concurrently en su versión ^7.4.0:
    > Para ejecutar varios scripts en paralelo.

* ### eslint en su versión ^8.24.0:
    > Analiza el código de JavaScript para detectar problemas por medio de patrones y, si está a su alcance, resolverlos él mismo.

* ### eslint-config-standard-with-typescript en su versión ^23.0.0:
    > Una extensión de configuración estandard de eslint para TypeScript.

* ### eslint-plugin-import en su versión ^2.26.0:
    > Plugin soporte de eslint para EcmaScript 6 con la sintaxis import / export.

* ### eslint-plugin-n en su versión ^15.3.0:
    > Reglas de Eslint adicionales para NodeJS.

* ### eslint-plugin-promise en su versión ^6.0.1:
    > Refuerza mejores prácticas para promesas en JavaScript.

* ### jest en su versión ^29.0.3:
    > Librería para escribir y ejecutar tests para pruebas de código.

* ### nodemon en su versión ^2.0.20:
    > Es una utilidad para monitorizar los cambios en el código que se está desarrollando para reiniciar el servidor automáticamente.

* ### serve en su versión ^14.0.1:
    > Servidor local para levantar el proyecto en una página web local.

* ### supertest en su versión ^6.2.4:
    > Librería de SuperAgent para testear servidores HTTP.

* ### ts-jest en su versión ^29.0.2:
    > Una extensión de Jest que permite utilizarlo para probar proyectos en realizados en TypeScript.

* ### ts-node en su versión ^10.9.1:
    > Motor de ejecución de TypeScript para transformarlo en JavaScript, permite ejecutar TypeScript en NodeJs sin precompilar.

* ### typescript en su versión ^4.8.3:
    > Lenguaje de progrmación que compila a JavaScript añadiendole tipado.

* ### webpack en su versión ^5.74.0:
    > Se encarga de empaquetar los módulos de la aplicación y genera un archivo único con ellos para producción.

* ### webpack-cli en su versión ^4.10.0:
    > Proporciona un conjunto de comandos para aumentar la velocidad al configurar un proyecto webpack personalizado.

* ### webpack-node-externals en su versión ^3.0.0:
    > Excluye la carpeta node_modules del paquete generado por webpack.

* ### webpack-shell-plugin en su versión ^0.5.0:
    > Permite lanzar comandos antes y después de los paquetes generados.

## Scripts de NPM creados:

> Scripts creados para facilitar el lnazamiento de instrucciones por consola en desarrollo y para producción.

### Del ejercicio 1

* #### "build": "npx tsc":
    > Crea una carpeta (Configurada anteriormente en el archivo tsconfig.json) en la que compila TypeScript a JavaScript.

* #### "start": "node dist/index.js":
    > Ejecuta el archivo index.js.

* #### "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"":
    > Lanza a través de concurrently dos comandos, sirven para desarrollo:
        1. npx tsc: de la que ya se ha hablado antes, crea una carpeta que compila TypeScript a JavaScript y la instruccion --watch en la que se queda escuchando cambios.
        2. nodemon -q dist/index.js: que monitoriza los cambios de código y reinicia el servidor cuando estos se produzcan.

* #### "test": "jest":
    > Lanza la herramienta de pruebas, pasa los tests que se han realizado y muestra si se han pasado o no, crea una carpeta coverage donde recoge el tanto porciento de los aciertos o fallos.

* #### "serve:coverage": "cd coverage/lcov-report && npx serve":
    > Va a la carpeta coverage creada anteriormente, realiza un reporte de los datos de jest y los sirve en una página HTML en un puerto local.

### Del ejercicio 3

* #### "dev": "concurrently \"npx tsc --watch\" \"npm run swagger\" \"nodemon -q dist/index.js\""
    > Lanza a través de concurrently tres comando, sirven para desarrollo;
        1. npx tsc: crea una carpeta que compila TypeScript a JavaScript y la instrucción --watch en la que se queda escuchando cambios.
        2. npm run swagger: Que crea un documento que se sirve en la web, con la documentación de la API que necesita el programador Frontend.
        3. nodemon -q dist/index.js: que monitoriza los cambios de código y reinicia el servidor cuando estos se produzcan.

* #### "build": "npx webpack --mode development"
    > Crea un archivo index en JavaScript con todos los archivos de la aplicación en modo de desarrollo.

* #### "build:prod": "npx webpack --mode production"
    > Crea un archivo index en JavaScript con todos los archivos de la aplicación en modo de producción.

* #### "swagger": "tsoa spec"
    > Instrucciones para lanzar con el script dev, crea un documento que se sirve en la web, con la documentación de la API que necesita el programador Frontend.

## Variables de entorno:

Por el momento solo hay una:

    PORT=8000

## Pruebas con Postman

 > Incluyo archivo exportado de colección de Postman

### Get Root Router

![alt Get Root Router](src/images/postman-get-root-router.png)

### Get Hello Whithout Name in Query Param

![alt Get Hello Whithout Name in Query Param](src/images/postman-get-hello-without-name-in-query-param.png)

### Get Hello With Name in Query Param

![alt Get Hello With Name in Query Param](src/images/postman-get-hello-with-name-in-query-param.png)

### Get Goodbye Without Name in Query Param

![alt Get Goodbye Without Name in Query Param](src/images/postman-get-goodbye-without-name-in-query-param.png)

### Get Goodbye With Name in Query Param

![alt Get Goodbye With Name in Query Param](src/images/postman-get-goodbye-with-name-in-query-param.png)