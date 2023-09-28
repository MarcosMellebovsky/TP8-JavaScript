// ej 1
function CalcularEdad(Fecha) 
{
    const FechaNac = new Date(Fecha);
    const hoy = new Date();
    let edad;
    if(hoy.getMonth() < FechaNac.getMonth())
    {
        edad = (hoy.getFullYear() - FechaNac.getFullYear())-1;
    }
    else if(hoy.getMonth() == FechaNac.getMonth())
    {
        if(hoy.getDate < FechaNac.getDate)
        {
            edad = (hoy.getFullYear() - FechaNac.getFullYear())-1;
        }
        else
        {
            edad = hoy.getFullYear() - FechaNac.getFullYear();
        }
        
    }
    else{
        edad = hoy.getFullYear() - FechaNac.getFullYear();
    }
    return edad;
}

// ej 2

function BuscarFruta(frutaUsuario,ArrayFrutas) 
{
    let condicion = ArrayFrutas.includes(frutaUsuario);
    return condicion;
}

// ej 5
function DuplicarArray(ArrayNumeros)
{
    const duplicado = ArrayNumeros.map(num => num*2)
    return duplicado;
}
