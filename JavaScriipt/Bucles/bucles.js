// Sintaxis
//     for(expresionInicial; expresionCondicional; expresionDeActualizacion){
//         //bloque de código a ejecutar
//     }

//     1. Inicialización. Se debe inicializar con una variable que será evaluada en la expresión a comparar. Variable global o local.
//     2. Condición. Es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina.
//     3. Pasos a realizar. Son los intervalos que cambiarán la variable inicial mientras sea true.

for (let i = 1; i <= 50; i++) {
    console.log("Numero: " + i);
}

for (let i = 18; i >= 0; i--) {
    console.log("Regresiva: " + i);
}

const array = ["Miles", "Miguel", "Jesus", "Anwar", "Ivan", "Iber"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let animales = ["perro", "gato", "michi", "dogo", "cat"];

//for of
for (let animal of animales) {
    console.log(animal + " array de animales");
}

//for in

for (let animal in animales) {
    console.log(animal);
}

//sumar los numeros del 1 al 100

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += 1;
    console.l;
}
console.log(suma);

//Imprima los numeros pares del 1 al 20

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Imprima la tabla de multiplicar del 5
let multipicado = 5;
for (let i = 1; i <= 10; i++) {
    let resultado = multipicado * i;
    console.log(`${multipicado} x ${i} = ${resultado}`);
}

//While 

let productos = 5;

while (productos > 0) {
    console.log(productos + " Productos vendidos");
    productos--;
}

let numero1 = 1;

while (numero1 <= 10) {
    console.log("El numero es " + numero1);
    numero1++;
}



//imprimir los elementos de un array

const frutas = ["uva", "manzana", "naranja"];

let fruta = 0;
while (fruta < frutas.length) {
    console.log(frutas[fruta]);
    fruta++;

}


// numPisos = 5
// for (let i = 0; i < numPisos; i++) {
//     let piso = '';
//     for (let j = 0; j < i + 1; j++) {
//         piso = piso + '*';
//     }
//     console.log(piso)
// }



let asteriscos = 5;
let iteracion = 0;
let texto = "";

while (iteracion < asteriscos) {
    texto = texto + "*";
    console.log(texto);
    iteracion++;

}




let numero2 = 1;

do {
    console.log(numero2);
    numero2++;

} while (numero2 < 6)

let producto = 10;
do {
    console.log(producto + " productos vendidos");

    productos--;
} while (productos >= 1);


/* ======= Control de ciclos =======
--- Sentencia break. Termina el bucle actual. 
Permite al programa salir de una sentencia, pero para que se pueda e
jecutar necesita estar anidado dentro de la sentencia.

--- Sentencia continue. No termina el bucle, 
sino que salta a la siguiente iteración.
*/


let numero3 = 0;

while (numero3 < 100) {
    numero3++;
    console.log(numero3);

    if (numero3 === 10) 
        break;
    
}



