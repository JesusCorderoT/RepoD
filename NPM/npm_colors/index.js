/*
    Tutorial para instalar un paquete de NPM

    1.- Crear una carpeta con un archivo .js
    2.- Abrir la ubicación de nuestra carpeta en la terminal
    3.- Ejecutar alguno de los comandos siguientes:
        $ npm init   -> cuando usemos un package propio
        o 
        $ npm init -y -> cuando usemos un package de npm existente
    4.- Instalar el paquete desde la línea de comandos. p.e. con el package colors seria:
        $ npm install colors
    5.- Importar el paquete desde el index.js
    6.- Ejecutar el paquete mediante la terminal utilizando nodeJS
        $ node archivo.js
    
*/


var colors = require('colors/safe');

console.log(colors.green("hola"));
console.log(colors.red.underline('I like cake and pies'));
console.log(colors.rainbow('OMG Rainbows!'));


colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});