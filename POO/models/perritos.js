class Perrito extends Mascota
{

    id = "";
    raza = "";

    constructor(id, raza, nombre, edad, especie)
    {
        super(nombre,edad,especie);
    this.id = id;
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
    this.especie = especie;

    }

    propiedades(){
        console.log("Mi perrito número " + this.id);
        console.log("Nombre " + this.nombre);
        console.log("Edad " + this.edad);
    }

    sonido(){
        console.log("grrr");
    }

}

let perrillo = new Perrito(1,"husky","MOXO",2,"una");

perrillo.propiedades();
perrillo.love;