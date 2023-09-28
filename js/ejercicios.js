/*1*/
function ej1()
{
    let Nombre = prompt("Ingrese su nombre: ");
    let Fecha = prompt("Ingrese su fecha: 'YYYY-MM-DD'");
    let Edad = CalcularEdad(Fecha);
    const resultado = document.getElementById("resultado1");
    resultado.innerHTML = "Hola " + Nombre + " Tenes: " + Edad + " años.";
}


/*2*/ 
function ej2()
{
    const ArrayFrutas = ["durazno", "manzana" , "pera" , "banana" , "uvas" , "kiwi" , "melon" , "frutillas" , "naranja" , "mandarina"]
    console.log("Frutas: "); 
    console.log(ArrayFrutas.join(", "));
    let frutaUsuario = prompt("Ingrese una fruta: ");
    let condicion = BuscarFruta(frutaUsuario,ArrayFrutas);
    const resultado = document.getElementById("resultado2");
    if(condicion == true)
    {
        resultado.innerHTML = "Si, tenemos: " + frutaUsuario;
    }
    else
    {
        resultado.innerHTML = "No, no tenemos: " + frutaUsuario;
    }
}


/*3*/
function ej3()
{
    const resultado3a = document.getElementById("resultado3a")
    const resultado3b = document.getElementById("resultado3b")
    const resultado3c = document.getElementById("resultado3c")
    const resultado3d = document.getElementById("resultado3d")
    resultado3a.innerHTML = 10 == "10"; //true
    resultado3b.innerHTML = 10 === "10"; //false
    resultado3c.innerHTML = typeof 10.6; //number
    resultado3d.innerHTML = true == 1; //true
}


/*4*/
function ej4()
{
    const ciudad = new Object();
    ciudad.nombre = "Buenos Aires";
    ciudad.fechaFundacion = new Date(1810,05,25);
    ciudad.Poblacion = 2000000;
    ciudad.Extensión = 203;
    const resultado = document.getElementById("resultado4")
    for(const i in ciudad)
    {
        resultado.innerHTML += (`${i} : ${ciudad[i]}`) + '<br>';
    }
}


/*5*/
function ej5()
{
    const ArrayNumeros = [1, 4, 6, 23, 40, 14, 2, 8, 90, 100];
    const newArray = DuplicarArray(ArrayNumeros);
    const resultado = document.getElementById("resultado5")
    resultado.innerHTML = "Nuevos numeros: " + newArray.join(", ");
}

/*6*/
function ej6()
{
    let asterisco = "*";
    const resultado6a = document.getElementById("resultado6a")
    for (let index = 1; index < 6; index++) {
        resultado6a.innerHTML += asterisco + '<br>';
        asterisco = asterisco + "*";
    }
    
    const altura = 5;
    const resultado6b = document.getElementById("resultado6b")
    for (let i = 1; i <= altura; i++) {
        let espacios = "-" .repeat(altura - i);
        let asteriscos = "*" .repeat(2 * i -1);
        resultado6b.innerHTML += espacios + asteriscos + espacios + '<br>';
    }

}



/*7*/
function ej7()
{
    let nombresIngresados = prompt("Ingrese una lista de nombres separados por coma: ");
    const ArrayNombres = nombresIngresados.split(',');
    let resultadoNombres = ArrayNombres.filter(Nombre => Nombre.startsWith('A'));
    let resultado7 = document.getElementById("resultado7")
    resultado7.innerHTML = "Los nombres que empiezan con A son: " + resultadoNombres;
}

function ej8()
{
    let frase = prompt("Ingrese una frase: ");
    let palabraAReemplazar = prompt("Ingresa una palabra que quieras reemplazar: ");
    let palabraCambiada = prompt("Ingresa una palabra por la que quieras reemplazar la anterior: ");
    const frase2 = frase.replaceAll(palabraAReemplazar, palabraCambiada);
    const resultado8 = document.getElementById("resultado8");
    resultado8.innerHTML = "La nueva frase es: " + frase2;
}
function ej9()
{
    let cadena = prompt("Ingrese un texto: ");
    let numero = prompt("Ingrese un numero: ");
    const nuevaCadena = cadena.slice(0, numero);
    const resultado9 = document.getElementById("resultado9");
    resultado9.innerHTML = "La nueva cadena es: " + nuevaCadena;
}
function ej10()
{
    let elementos = prompt("Ingrese una lista de elementos separados por coma: ");
    const lista = elementos.split(',');
    const nuevosElementos = lista.join(' - ');
    const resultado10 = document.getElementById("resultado10");
    resultado10.innerHTML = nuevosElementos;
}
function ej11()
{
    let productosPedidos = prompt("ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma: ");
    let recaudacion, acum = 0;
    const elemento = productosPedidos.split(','); 
    for (let index = 0; index < elemento.length; index++) {
        recaudacion = elemento[index].split(':');
        const total = recaudacion[1] * 1;
        acum = acum + total; 
    }
    const resultado11 = document.getElementById("resultado11");
    resultado11.innerHTML = "El total recaudado es: " + acum;
}


