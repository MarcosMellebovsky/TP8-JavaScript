function ej1 () {
    let Nombre = prompt("Ingrese su nombre: ");
    let Fecha = prompt("Ingrese su fecha: 'YYYY-MM-DD'");
    let Edad = CalcularEdad(Fecha)
    console.log("Hola " + Nombre + " Tenes: " + Edad + " años.");
}
ej1();