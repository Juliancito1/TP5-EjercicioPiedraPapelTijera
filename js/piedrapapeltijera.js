const piedra = 0;
const papel = 1;
const tijera = 2;


const btnPiedra = document.getElementById("piedra")
const btnPapel = document.getElementById("papel")
const btnTijera = document.getElementById("tijera")

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

    if(eleccion === piedra && cpu === tijera)
    {
        console.log("El jugador Gana");
    }
    else if(eleccion === piedra && cpu === papel)
    {
        console.log("La computadora gana");
    }
    else if(eleccion === piedra && cpu === piedra)
    {
        console.log("Empate");
    }

    if(eleccion === papel && cpu === piedra)
    {
        console.log("El jugador Gana");
    }
    else if(eleccion === papel && cpu === tijera)
    {
        console.log("La computadora gana");
    }
    else if(eleccion === papel && cpu === papel)
    {
        console.log("Empate");
    }

    if(eleccion === tijera && cpu === papel)
    {
        console.log("El jugador Gana");
    }
    else if(eleccion === tijera && cpu === piedra)
    {
        console.log("La computadora gana");
    }
    else if(eleccion === tijera && cpu === tijera)
    {
        console.log("Empate");
    }
}