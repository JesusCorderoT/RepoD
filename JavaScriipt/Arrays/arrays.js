const array = ["Miles","Miguel","Jesus","Anwar","Ivan","Iber"];

console.log(array[0]);
console.log(array);



/*
Factorial con recursividad
*/

function factorial(n)
{
    if(n === 0)
    {
        return 1;
    }
    return n * factorial(n - 1);

}
console.log(factorial(5));

//Longitud de unn array
const celulares = new Array("Samsumg", "Xiaomi", "Apple");
console.log(celulares);

//Guardandolo en una variable
let longitudCelulares = celulares.length;
console.log(longitudCelulares);

let ultimo = celulares[celulares.length-1];
console.log(`el ultimo es ${ultimo}`);


const listaDeCompras = ["X", "A", "S"];
console.log(listaDeCompras);

//Elimina el ultimo elemento de un array
let popCh28 = array.pop();
console.log(popCh28);

//Agrega  push
let pushCh28 = array.push("Yisus");
console.log(array);

//Elimina uno o varios splice()
let spliceCh28 = array.splice(1 , 2);
console.log(array);

//elimina el primero shift
let shiftCh28 = array.shift();
console.log(array);


let unshiftCh28 = array.unshift("Maria");
console.log(array);


array.forEach(elemento => console.log(elemento));

let sortCh28 = array.sort();
console.log(array);


let reverseCh28 = array.reverse();
console.log(array);

const automovil = 
{
    marca: "Nissan",
    modelo: "Sentra",
    year: "2018",
    color: "gris oxford",
}

console.log(automovil);

let marcaAuto = automovil.marca;
console.log(marcaAuto);