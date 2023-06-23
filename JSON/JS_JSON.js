/*
Hoisting. Es un comportamiento especial en el cual las declaraciones de variables y funciones se mueven al principio de ámbito, es decir, antes de que se ejecuto el código.


*/

saludoGatito();

function saludoGatito(){
    console.log("Hola, soy un gatito");
}

/*
JSON (JavaScript Object Notation), Notación de objetos de JS.
    Es un formato estándar ligero basado en texto y que nos sirve para representar datos estructurados basados en la sintaxis de JS.

    Es utilizado para transmitir datos en aplicaciones web, desde el usuario al servidor y viceversa.
 */


    //Objeto común de JS
    let nick = {
        nombre: "Nick",
        edad: "8",
        color: "Blanco"
    }

    console.log(nick);
    console.log(typeof(nick));

    //Objeto JSON
    let nickJSON = `{
        "nombre": "Nick",
        "edad": 8,
        "color": "blanco"
    }`;

    console.log(nickJSON);
    console.log(typeof(nickJSON));

    /*Los JSON son útiles para transmitir datos a traves de la red pero deben ser convertidos a objetos nativos de JS para acceder a sus datos.

    -- Serialización
        Proceso de convertir un objeto en una cadena de bytes o en una cadena de caracteres que puede ser almacenada o transmitida.

    -- Deserialización
        Proceso de tomar una secuencia de bytes o una cadena de caracteres serializados y convertirlos en un objeto en la memoria.
    */

    let cheems = `{
        "nombre": "Cheems",
        "edad": 4,
        "color": "Cafe"
    }`

    let milaneso = {
        nombre: "Milaneso",
        edad: 5,
        color: "Crema"
    }

    /* Para convertir (serialización y deseralización) los diferentes tipos de objetos (nativos y JSON), recurrimos a dos métodos de JS:
        - JSON.parse() analiza una cadena de texto como JSON, transformándolo
        - JSON.stringify() convierte un objeto de JE en una cadena de texto tipo JSON.
*/

//Método parse(). De JSON a Object
    const cheemsTransformado = JSON.parse(cheems);
    console.log(cheemsTransformado);

//Método stringify(). De Object a JSON
    const milanesoTransformado = JSON.stringify(milaneso);
    console.log(milanesoTransformado);
    // console.log(JSON.parse(milanesoTransformado));


    /* Anidación de objetos en objetos*/

    const employees = { employees :  [
            {firstName: "Carlos",lastName: "Navarro", age:29},
            {firstName: "Jonathan", lastName: "Mendoza", age: 25},
            {firstName: "Nancy", lastName: "Pérez", age:24}]//, [] Es posible poner otro objeto
    }

    console.log(typeof(employees));
    console.log(employees);

    let employeesTransform = JSON.stringify(employees);
    console.log(typeof(employeesTransform));

    //RickAndMortyAPI
    let rickSanchez = `{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)"}}`;

    console.log(rickSanchez);
    console.log(typeof(rickSanchez));
    let rickSanchezObject = JSON.parse(rickSanchez);
    console.log(rickSanchezObject);

    // console.log(rickSanchezObject.gender);
    // console.log(rickSanchezObject.origin);