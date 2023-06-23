let nombre = "Pelusa";
let edad = 2;
let especie = "Gato";
let raza = "angora";
let caracter = "Amoroso";
let color = "Blanco";



const gatito1 =
{
    nombre: "Pelusa",
    edad: 2,
    especie: "Gato",
    raza: "angora",
    caracter: "Amoroso",
    color: "Blanco",
};
const gatito2 =
{
    nombre: "Michigan",
    edad: 1,
    especie: "Gato",
    raza: "Perza",
    caracter: "Malo",
    color: "Negro",
};


class Gatitos
{
nombre = "";
edad = "";
especie = "";
raza = "";
caracter = "";
color = "";

constructor(nombre, edad,especie,raza,caracter,color)
{
    this.nombre = nombre;
    this.edad = edad;
    this.especie = especie;
    this.raza = raza;
    this.caracter = caracter;
    this.color = color;
}

comer(){
    console.log("toi comiendo");
}
trepa(){
    console.log("toi subiendo");
}
dormir(){
    console.log("toi mimiendo");
}
maullar(){
    console.log("miau");

};
ronronear(){
    console.log("rrrrr");

};


}

let michi1 = new Gatitos("Mih",2,"especie","raza","caracter","color");

console.log(michi1);

michi1.dormir();

/*Orden para instanciar objetos a partir de una clase
    Class
    Atributos como variables vacías
    Constructores (this)
    Métodos o acciones
    Fuera de la clase, se instancian (crean) objetos con new 
*/

