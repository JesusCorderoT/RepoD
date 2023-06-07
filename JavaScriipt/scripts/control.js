/*

Conjunto de instrucciones que se ejecutan si la condicion es verdadera

*/

let edadJesus = 23;

if (edadJesus >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

let num1 = 15;
let num2 = 9;

if (num1 > num2) {
  console.log(`El numero ${num1} es mayor que ${num2}`);
} else {
  console.log(`El numero ${num2} es mayor que ${num1}`);
}

let n1 = 6;

//FORMA 1 normal
if (n1 % 2 == 0) {
  console.log(`El numero ${n1} es par`);
} else {
  console.log(`El numero ${n1} es impar`);
}

//FORMA 2 ternario
n1 % 2 == 0
  ? console.log(`El numero ${n1} es par`)
  : console.log(`El numero ${n1} es impar`);

//FORMA 3 ternario en variable
let resultado =
  n1 % 2 == 0 ? `El numero ${num1} es par` : `El numero ${num2} es impar`;
console.log(resultado);

let dia = 1;

if (dia == 1) {
  console.log("Lunes");
} else if (dia == 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("Opcion no valida");
}

let op = 75;

switch (op) {
  case (op = 1):
    console.log("Lunes switch");

    break;

  case (op = 2):
    console.log("Martes switch");

    break;

  case (op = 3):
    console.log("Miercoles switch");

    break;

  case (op = 4):
    console.log("Jueves switch");

    break;

  case (op = 5):
    console.log("Viernes switch");

    break;

  case (op = 6):
    console.log("Sabado switch");

    break;

  case (op = 7):
    console.log("Domingo switch");

    break;

  default:
    console.log("No valido");
    break;
}

// programa donde se muestre si es de mañana o de noche

// const d = new Date();
// let hour = d.getHours();

// console.log(d);

// if (d > 06:00:00 )
// {
//     console.log(`El numero ${num1} es par`);
// }else
// {
//     console.log(`El numero ${num2} es impar`);

// }

// const currentDate = new Date();
// const currentHour = currentDate.getHours();
// const currentMinute = currentDate.getMinutes();

// console.log(`${currentHour+5}:${currentMinute}`);

let currentHour = 24;

// let currentHour = 5;

if (currentHour >= 6 && currentHour <= 13) {
  console.log("Es de mañana");
} else if (currentHour >= 13 && currentHour <= 18) {
  console.log("Es de Tarde");
} else if (currentHour >= 19 && currentHour <= 23) {
  console.log("Es de noche");
} else if (currentHour >= 0 && currentHour <= 5) {
  console.log("Es de madrugada");
} else {
  console.log("Hora no valida");
}

//Sentencias anidadas

if (edadJesus >= 18) {
  if (edadJesus < 65) {
    console.log("Es un adulto");
  } else {
    console.log("Es un adulto mayor");
  }
} else if (edadJesus > 12) {
  console.log("Es un adolecente");
} else if (edadJesus > 3) {
  console.log("Es un niño");
} else {
  console.log("Es un bebe");
}


//verificar la hora del dia 

const today = new Date();//Nuevo objeto
console.log(today);



/*



*/

// function horas()
// {
//     if (hour >= 6 && hour <= 13) {
//         console.log("Es de mañana");
//       } else if (hour >= 13 && hour <= 18) {
//         console.log("Es de Tarde");
//       } else if (hour >= 19 && hour <= 23) {
//         console.log("Es de noche");
//       } else if (hour >= 0 && hour <= 5) {
//         console.log("Es de madrugada");
//       } else {
//         console.log("Hora no valida");
//       }
// }

// horas();





const d = new Date();
let hour = d.getHours();
console.log(d);


function saludo()
{

    let mensaje = "ERROR";

    if (hour >= 6 && hour <= 12) {
        mensaje = ("BUENOS DIAS");
      } else if (hour >= 13 && hour <= 18) {
        mensaje = ("BUENASTARDES");
      } else if (hour >= 19 && hour <= 23) {
        mensaje = ("BUENAS NOCHES");
      }  else {
        mensaje = ("Buenas madrugadas");
      }
      
      return mensaje;
}

console.log(saludo());



const checardia = (diaDeSemana) => {
    let finDeSemana = diaDeSemana === "Sabado" || diaDeSemana === "Domingo";

    if(finDeSemana)
    {
        return "Es fin de semana";
    }else
    {
        return "Es dia de semana (Lunes a Viernes)";
    }
};

console.log(checardia("m"));

