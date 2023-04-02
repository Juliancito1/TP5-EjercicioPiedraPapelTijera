const piedra = 0;
const papel = 1;
const tijera = 2;

let victoria = 0;
let derrota = 0;
let empate = 0;

const btnPiedra = document.getElementById("piedra")
const btnPapel = document.getElementById("papel")
const btnTijera = document.getElementById("tijera")
const resultado = document.getElementById("resultado")

btnPiedra.addEventListener('click',()=>
{
    jugar(piedra);
});

btnPapel.addEventListener('click',()=>
{
    jugar(papel);
});

btnTijera.addEventListener('click',()=>
{
    jugar(tijera);
});

function jugar(eleccion){
    const cpu = Math.floor(Math.random() * 3);
    console.log(cpu);
    const seccion = document.getElementById('resultado')
    const ganar = document.getElementById('victoria');
    const perder = document.getElementById('derrota');
    const empatar = document.getElementById('empate');
    if(eleccion === piedra && cpu === tijera)
    {
        console.log("El jugador Gana");
        resultado.innerHTML = '<h2 class= "text-success">Elegiste Piedra, la CPU eligió Tijera. Has Ganado!!!</h2>'
        victoria++;
        ganar.innerHTML = `${victoria}`
    }
    else if(eleccion === piedra && cpu === papel)
    {
        console.log("La computadora gana");
        resultado.innerHTML = '<h2 class="text-danger">Elegiste Piedra, la CPU eligió Papel. Has perdido!!!</h2>'
        derrota++;
        perder.innerHTML = `${derrota}`
    }
    else if(eleccion === piedra && cpu === piedra)
    {
        console.log("Empate");
        resultado.innerHTML = '<h2 class="text-warning">Elegiste Piedra, la CPU eligió Piedra. Empate!!!</h2>'
        empate++;
        empatar.innerHTML = `${empate}`
    }

    if(eleccion === papel && cpu === piedra)
    {
        console.log("El jugador Gana");
        resultado.innerHTML = '<h2 class="text-success">Elegiste Papel, la CPU eligió Piedra. Has Ganado!!!</h2>'
        victoria++;
        ganar.innerHTML = `${victoria}`
    }
    else if(eleccion === papel && cpu === tijera)
    {
        console.log("La computadora gana");
        resultado.innerHTML = '<h2 class="text-danger">Elegiste Papel, la CPU eligió Tijera. Has Perdido!!!</h2>'
        derrota++;
        perder.innerHTML = `${derrota}`
    }
    else if(eleccion === papel && cpu === papel)
    {
        console.log("Empate");
        resultado.innerHTML = '<h2 class="text-warning">Elegiste Papel, la CPU eligió Papel. Empate!!!</h2>'
        empate++;
        empatar.innerHTML = `${empate}`
    }

    if(eleccion === tijera && cpu === papel)
    {
        console.log("El jugador Gana");
        resultado.innerHTML = '<h2 class="text-success">Elegiste Tijera, la CPU eligió Papel. Has Ganado!!!</h2>';
        victoria++;
        ganar.innerHTML = `${victoria}`
    }
    else if(eleccion === tijera && cpu === piedra)
    {
        console.log("La computadora gana");
        resultado.innerHTML = '<h2 class="text-danger">Elegiste Tijera, la CPU eligió Piedra. Has Perdido!!!</h2>';
        derrota++;
        perder.innerHTML = `${derrota}`
    }
    else if(eleccion === tijera && cpu === tijera)
    {
        console.log("Empate");
        resultado.innerHTML = '<h2 class="text-warning">Elegiste Tijera, la CPU eligió Tijera. Empate!!!</h2>';
        empate++;
        empatar.innerHTML = `${empate}`
    }
}