// ej 1
function CalcularEdad(Fecha) {
    const FechaNac = new Date(Fecha);
    const hoy = new Date()
    if(hoy.getDate() < FechaNac.getDate() && hoy.getMonth() < FechaNac.getMonth())
    {
        let edad = hoy.getFullYear() - FechaNac.getFullYear();
    }
    else
    {
        let edad = (hoy.getFullYear() - FechaNac.getFullYear()) + 1;
    }
    return edad;
}