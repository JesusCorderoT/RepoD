/*
reto 1 
crea un programa para calcular la edad de un michi
0-2 años gato = 24 años humanos
1 año gatuno extra = 4 años humanos extra


*/



function calcularEdadGato(edadGatuna) {
    let edadHumana = 0;
    if (edadGatuna <= 0) {
        edadHumana = 0;
    } else if (edadGatuna === 1) {
        edadHumana = 24;
    } else if (edadGatuna === 2) {
        edadHumana = 24 + 4;
    } else {
        edadHumana = 24 + 4 + ((edadGatuna - 2) * 4);
    }
    return edadHumana;
}


let edadGatuna = 3;
let edadHumana = calcularEdadGato(edadGatuna);
console.log(`La edad de un gato de ${edadGatuna} años gatunos es de ${edadHumana} años humanos.`);

console.log(calcularEdadGato(edadGatuna));


/*
Reto 2 

Crear una funcion general y funcion flecha para verificar si un numero es par o impar

*/

let n1 = 6;

//FUNCION GENERAL

function determinarParGeneral() {
    if (n1 % 2 == 0) {
        console.log(`El numero ${n1} es par`);
    } else {
        console.log(`El numero ${n1} es impar`);
    }
}

determinarParGeneral();

//FUNCION FLECHA 1

const determinarParFlecha = n1 => {
    if (n1 % 2 == 0) {
        console.log(`El numero ${n1} es par`);
    } else {
        console.log(`El numero ${n1} es impar`);
    }
}

determinarParFlecha(7);

//FUNCION FLECHA 2
numero = 10;

const determinarParFlecha2 = (numero) => {
    let mensaje;
    (numero % 2 == 0) ? mensaje = "El numero " + numero + " Es par" : mensaje = "El numero" + numero + "Es inpar";
    return mensaje;
}
console.log(determinarParFlecha2(numero));

/*
Reto 3

Crear un programa para cacular la edad de una persona y que determine 
si es mayor o menor de edad, utilizando funcion general y funcion flecha

usando const todat = new Date();

*/

//FUNCION GENERAL

let año = 2020;
const date = new Date();
let d = date.getFullYear();
let edad =  d - año;

function calcularEdadGenral(edad) {
    if (edad >= 18) {
        console.log("Es mayor de edad " + edad);
    }
    else {
        console.log("Es menor de edad " + edad);
    }
}
calcularEdadGenral(edad);

//FUNCION FLECHA

const calcularEdadFlecha = (edad) => 
{
(edad >= 18)? mensaje = edad + " Ya es mayor" : mensaje = edad + " Aun es menor";
return mensaje;
}
console.log(calcularEdadFlecha(edad));




/*
Reto 4 


Cre un prorama de4 cajero automatico que permita 
Consultar saldo.
Donar 10 pesos a la cuenta, puede ser no
Convertir dolares a pesos: 1USD = 18MXN



*/


let saldoInicial = 1000;

function cajeroAutomatico(saldoInicial) 
{

    let op = 3;
    let donar = "No";
    let dolares = 3;

    if(op == 1 )
    {
        return "Su saldo es de:" + saldoInicial;
    }
    else if (op == 2)
    {
        if (donar == "Si")
        {
            suma = saldoInicial + 10;
            return "Su saldo despues de abonar es de: " + suma;

        }else
        {
            return "No abono, su saldo es de:" + saldoInicial;
        }
    }else if (op == 3)
    {
        return `Sus ${dolares} USD. es un equivalente a `+ dolares * 18 + " MXN.";

    }
}

cajeroAutomatico(saldoInicial);

console.log(cajeroAutomatico(saldoInicial));



//Crear un programa que con switch de alumnos, las calificaciines aprobatorias van de 5.5 a 10 y deben redondearse al numero superior inmediato

   let resultado;
   let calificacion = 5.4;

    switch (true) {
    //   case calificacion >= 9.5:
    //     resultado = "Aprobado con sobresaliente";
    //     break;
    //   case calificacion >= 8.5:
    //     resultado = "Aprobado con notable";
    //     break;
    //   case calificacion >= 7.5:
    //     resultado = "Aprobado con bien";
    //     break;
      case calificacion >= 5.5:
        resultado = "Aprobado con panzazo";
        break;
      default:
        resultado = "Suspenso";
    }
  
    // Redondear al número superior inmediato  
    console.log(`${calificacion} se redondea a ${Math.round(calificacion)} ${resultado}`);
  