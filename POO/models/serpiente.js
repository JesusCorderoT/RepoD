class snake extends Mascota
{

    comportamiento = "";

    constructor(comportamiento, nombre, edad, especie)
    {
        super(nombre,edad,especie);
        this.comportamiento = comportamiento


    }

    saludo()
    {
        console.log("Hola soy "+ this.nombre + " me arrastro");

    }

}


let snako = new snake("NO","DRADO",5,"Boa");

snako.saludo();
snako.love();